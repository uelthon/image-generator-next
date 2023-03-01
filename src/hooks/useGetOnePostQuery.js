import { useQuery } from '@tanstack/react-query'

import api from '../services/api'

const useGetOnePostQuery = ({ id }) => {
  return useQuery({
    queryKey: ['Post', id],
    queryFn: () => api.posts.getOne(id),
    refetchOnWindowFocus: false,
    cacheTime: Infinity,
    enabled: Boolean(id)
  })
}

export default useGetOnePostQuery
