import { useMutation } from '@tanstack/react-query'
import { useEffect } from 'react'
import api from '../services/api'

const useGenerateImage = () => {
  return useMutation({
    mutationFn: (body) => api.stabledif.create(body)
  })
}

const useCreateStableDifMutation = ({ body, skip }) => {
  const { data, isLoading, error, mutate } = useGenerateImage()

  useEffect(() => {
    if (skip) return
    mutate(body)
  }, [])

  return {
    data,
    isLoading,
    error
  }
}

export default useCreateStableDifMutation
