import React from 'react'
import DownloadButton from '../DownloadButton'

const Details = ({ name, prompt, image, modelo, createdAt = '' }) => {
  const data = createdAt ? new Date(createdAt).toDateString() : ''

  return (
    <div className='flex flex-col justify-start items-start gap-1 px-8 text-gray-300 text-opacity-90 w-full lg:justify-center'>
      <h1 className='capitalize text-xl'>{name}</h1>
      <p className='capitalize text-lg'>{prompt}</p>
      <p className='text-sm'>created by {modelo} | 512x512.png | {data}</p>
      <DownloadButton image={image} modelo={modelo} />
    </div>
  )
}

export default Details
