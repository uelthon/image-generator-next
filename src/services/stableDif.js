import axios from 'axios'

const baseUrl = '/api/image-generator/stable'

const create = async (body) => {
  const { data } = await axios.post(baseUrl, body)
  return data
}

export default {
  create
}
