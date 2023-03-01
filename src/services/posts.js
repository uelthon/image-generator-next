import axios from 'axios'

const baseUrl = '/api/posts'

const getAll = async (params) => {
  const { data } = await axios.get(baseUrl, {
    params
  })
  return data
}

const getOne = async (id) => {
  const { data } = await axios.get(`${baseUrl}/${id}`)
  return data
}

const create = async (body) => {
  const { data } = await axios.post(baseUrl, body)
  return data
}

export default {
  getAll,
  create,
  getOne
}
