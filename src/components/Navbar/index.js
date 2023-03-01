import React from 'react'
import Link from 'next/link'
import { TfiGallery } from 'react-icons/tfi'

import ToggleTheme from './ToggleTheme'

const Navbar = () => {
  return (
    <div className='navbar fixed top-0 left-0 z-30 flex justify-center items-center bg-opacity-90 backdrop-blur shadow-md bg-base-100 text-base-content'>
      <div className='w-full flex justify-between items-center md:w-4/5'>
        <Link className='btn btn-ghost normal-case text-xl' href='/'>TextToImage</Link>
        <div className='flex gap-1 items-center'>
          <Link className='btn btn-ghost normal-case' href='/gallery' aria-label='go to gallery'>
            <TfiGallery size='1.25rem' /> <span className='hidden pl-1 md:block'>Gallery</span>
          </Link>
          <ToggleTheme />
        </div>
      </div>
    </div>
  )
}

export default Navbar
