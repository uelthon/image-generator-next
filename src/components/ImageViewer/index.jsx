import { useRouter } from 'next/router'
import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

import useGetOnePostQuery from '../../hooks/useGetOnePostQuery'
import Loader from '../Loader'
import BodyViewer from './BodyViewer'
import Metadata from './Metadata'

const ImageViewer = ({ id }) => {
  const { data, isLoading, error } = useGetOnePostQuery({ id })
  const router = useRouter()

  if (!id) return null

  const handleClick = () => {
    router.push('/gallery')
  }

  return (
    <div className='grid place-items-center bg-black bg-opacity-50 backdrop-blur-md fixed top-0 left-0 w-full h-screen z-[999]'>
      {data && <Metadata image={data.image} modelo={data.modelo} name={data.name} />}
      {error && <p>{error.message}</p>}
      {isLoading && <Loader />}
      {data &&
        <BodyViewer
          image={data.image}
          name={data.name}
          modelo={data.modelo}
          prompt={data.prompt}
          createdAt={data.createdAt}
        />}
      <button
        className='btn btn-circle btn-error absolute right-5 top-5'
        onClick={handleClick}
      >
        <AiOutlineClose size='1.25rem' />
      </button>
    </div>
  )
}

export default ImageViewer
