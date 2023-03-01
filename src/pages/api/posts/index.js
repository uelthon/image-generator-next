import { decode } from 'base64-arraybuffer'
import { v4 as uuid } from 'uuid'

import startDB from '@/lib/mongodb/connect'
import Post from '@/lib/mongodb/models/post'
import supabase from '@/lib/supabase'

const BASE_IMAGE_PATH = 'https://ajukivxzgclzxkwneebs.supabase.co/storage/v1/object/public/images'

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '2mb'
    }
  }
}

export default async function handler (req, res) {
  await startDB()

  if (req.method === 'GET') {
    const {
      offset = 0,
      limit = 10,
      search = '',
      orderby = 'name',
      dir = -1,
      'modelos[]': modelos = []
    } = req.query

    const regexp = search.length > 0 ? new RegExp(search.replace(/[^\w ]|_/gi, ''), 'i') : null

    const count = await Post.find({
      ...(search.length > 0 && {
        $or: [
          { name: regexp },
          { prompt: regexp }
        ]
      }
      ),
      ...(modelos.length > 0 && { modelo: { $in: modelos } })
    }).count()

    const posts = await Post.find({
      ...(search.length > 0 && {
        $or: [
          { name: regexp },
          { prompt: regexp }
        ]
      }
      ),
      ...(modelos.length > 0 && { modelo: { $in: modelos } })
    })
      .limit(limit)
      .skip(offset)
      .sort({ [orderby]: dir })

    res.status(200).json({
      offset,
      limit,
      count,
      posts
    })
  }

  if (req.method === 'POST') {
    const { name, prompt, baseImage, modelo } = req.body

    if (!name || !prompt || !baseImage || !modelo) {
      return res.status(400).json({ error: 'invalid arguments' })
    }

    const randomName = uuid()
    const urlName = `${randomName} ${name}`.split(' ').join('-')

    const image = await supabase
      .storage
      .from('images')
      .upload(`image-generator/${urlName}.png`, decode(baseImage), {
        contentType: 'image/png'
      })

    const url = `${BASE_IMAGE_PATH}/${image.data.path}`

    const post = await Post.create({
      name,
      prompt,
      image: url,
      modelo
    })

    if (!post) {
      await supabase
        .storage
        .from('images')
        .remove([`image-generator/${urlName}.png`])
    }

    res.status(200).json(post)
  }
}
