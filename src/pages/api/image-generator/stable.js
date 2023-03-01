import stableApi from '@/lib/stability'

export default async function handler (req, res) {
  try {
    const { prompt } = req.body
    const stableResponse = await stableApi.textToImage(prompt)
    res.status(200).json({
      prompt,
      image: stableResponse.artifacts[0].base64,
      model: 'Stable Diffusion'
    })
  } catch (error) {
    console.log(error)
    res.status(500).send(error?.response.data.message)
  }
}
