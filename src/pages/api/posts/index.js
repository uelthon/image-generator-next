import startDB from '@/lib/mongodb/connect'
import Post from '@/lib/mongodb/models/post'

startDB()

export default async function handler (req, res) {
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
}
