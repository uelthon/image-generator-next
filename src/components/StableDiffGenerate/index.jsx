import React from 'react'

import useCreateDalleMutation from '../../hooks/useCreateStableDifMutation'
import Card from '../../ui/Card'
import Alert from '../../ui/Alert'
import Skeleton from '../../ui/Skeleton'

const StableDiffGenerate = ({ prompt }) => {
  const { data, error, isLoading } = useCreateDalleMutation({
    body: {
      prompt
    },
    skip: !prompt
  })

  if (!prompt) return null

  return (
    <>
      {error && <Alert error={error.message} />}
      {isLoading && <Skeleton
        message='Stable Diff is generating the image'
                    />}
      {data && <Card image={data.image} model={data.model} prompt={data.prompt} />}
    </>
  )
}

export default StableDiffGenerate
