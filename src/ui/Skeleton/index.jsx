import React from 'react'
import Loader from '../../components/Loader'

export const SkeletonGallery = () => {
  return (
    <div className='bg-gray-300 w-[100%] min-h-[241px] max-h-[370px] animate-pulse rounded-lg'>
      <Loader height='100%' />
    </div>
  )
}

const Skeleton = ({ message }) => {
  return (
    <>
      <div className='card card-compact shadow-xl'>
        <figure>
          <div className='bg-gray-300 w-[100%] h-[500px] animate-pulse rounded-lg'>
            <Loader height='100%' message={message} />
          </div>
        </figure>
        <div className='card-body'>
          <h2 className='card-title w-[100%] h-7 bg-gray-300 animate-pulse rounded-lg' />
          <p className='w-[100%] h-4 bg-gray-300 animate-pulse rounded-lg' />
          <p className='w-[80%] h-4 bg-gray-300 animate-pulse rounded-lg' />
          <div className='card-actions justify-end'>
            <button className='btn btn-primary w-[100px] animate-pulse' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Skeleton
