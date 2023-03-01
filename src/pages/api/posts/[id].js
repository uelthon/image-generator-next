import startDB from '@/lib/mongodb/connect'
import Post from '@/lib/mongodb/models/post'

export default async function handler (req, res) {
  await startDB()
  if (req.method === 'GET') {
    try {
      const post = await Post.findById(req.query.id)
      res.status(200).json(post)
    } catch (err) {
      console.log(err)
      res.status(400).json({ error: 'incorrect or missing id' })
    }
  }
}
