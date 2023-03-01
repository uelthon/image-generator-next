import React from 'react'

import useCreateDalleMutation from '../../hooks/useCreateDalleMutation'
import Alert from '../../ui/Alert'
import Card from '../../ui/Card'
import Skeleton from '../../ui/Skeleton'

const DalleGenerate = ({ prompt }) => {
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
        message='Dall-E is generating the image'
                    />}
      {data && <Card image={data.image} model={data.model} prompt={data.prompt} />}
    </>
  )
}

export default DalleGenerate
