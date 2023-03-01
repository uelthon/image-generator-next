import axios from 'axios'

const baseUrl = '/api/image-generator-openia/dalle'

const create = async (body) => {
  const { data } = await axios.post(baseUrl, body)
  return data
}

export default {
  create
}
