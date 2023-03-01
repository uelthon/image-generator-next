import { useInfiniteQuery } from '@tanstack/react-query'

import api from '../services/api'

const useGetAllPostsQuery = ({ params }) => {
  return useInfiniteQuery({
    queryKey: ['POSTS', JSON.stringify(params)],
    queryFn: ({ pageParam = 0 }) => api.posts.getAll({
      ...params,
      offset: pageParam
    }),
    getNextPageParam: (lastPage) => {
      if (Number(lastPage.offset) >= (Number(lastPage.count) - Number(lastPage.limit))) return false
      return Number(lastPage.offset) + Number(lastPage.limit)
    },
    refetchOnWindowFocus: false
  })
}

export default useGetAllPostsQuery
