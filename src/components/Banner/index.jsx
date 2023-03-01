import React from 'react'
import { MdImageSearch } from 'react-icons/md'

const Banner = () => {
  return (
    <div className='relative h-48 flex bg-black bg-opacity-10 backdrop-blur-md rounded-3xl'>
      <div className='p-8 flex flex-col flex-1 gap-4 justify-center h-full'>
        <div className='flex gap-4 text-3xl font-bold items-center w-full'>
          <MdImageSearch />
          <h1>Text to Image</h1>
        </div>
        <p className='text-left text-base font-bold'>Generate images from text</p>
      </div>
      <div className='h-full flex flex-col flex-1 absolute top-0 left-0 w-full -z-20 sm:static'>
        <video className='w-full rounded-3xl object-cover h-full' muted loop autoPlay>
          <source src='TextToImage.webm' type='video/webm' />
        </video>
      </div>
      <div className='w-full h-full rounded-3xl bg-slate-700 bg-opacity-60 absolute top-0 left-0 -z-10 sm:hidden' />
    </div>
  )
}

export default Banner
