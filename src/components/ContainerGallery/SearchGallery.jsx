import React from 'react'
import useParamsGallery from '../../stores/useParamsGallery'

let timer = null

const SearchGallery = () => {
  const { params, setParams } = useParamsGallery()

  const handleChange = (e) => {
    e.preventDefault()
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      setParams('search', e.target.value)
    }, 300)
  }

  return (
    <input
      type='text'
      className='w-full rounded-xl outline-none p-4 bg-black bg-opacity-10 backdrop-blur-md'
      placeholder='Search something'
      name='search'
      defaultValue={params.search}
      onChange={handleChange}
    />
  )
}

export default SearchGallery
