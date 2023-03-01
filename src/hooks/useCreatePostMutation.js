import { useMutation, useQueryClient } from '@tanstack/react-query'
import api from '../services/api'

const useCreatePostMutation = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (body) => api.posts.create(body),
    onSuccess: () => {
      queryClient.invalidateQueries(['POSTS'])
    }
  })
}

export default useCreatePostMutation
