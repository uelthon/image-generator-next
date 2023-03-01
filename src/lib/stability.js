import axios from 'axios'

const engineId = 'stable-diffusion-512-v2-0'
const apiHost = 'https://api.stability.ai'

const textToImage = async (text) => {
  const { data } = await axios.post(`${apiHost}/v1beta/generation/${engineId}/text-to-image`, {
    text_prompts: [
      {
        text
      }
    ],
    cfg_scale: 8,
    clip_guidance_preset: 'FAST_BLUE',
    height: 512,
    width: 512,
    samples: 1,
    steps: 30,
    seed: 992446758,
    sampler: 'K_DPMPP_2S_ANCESTRAL'
  }, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${process.env.STABILITY_API_KEY}`
    }
  })
  return data
}

const stableApi = {
  textToImage
}

export default stableApi
