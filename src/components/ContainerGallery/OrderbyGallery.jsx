import React from 'react'
import useParamsGallery from '../../stores/useParamsGallery'
import ModelsFilters from './ModelsFilters'

const OrderbyGallery = () => {
  const { params, setParams } = useParamsGallery()

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setParams(name, value)
  }

  return (
    <div className='w-full flex justify-center gap-4 items-center flex-wrap md:justify-start'>
      <select defaultValue={params.orderby} name='orderby' className='select outline-none' onChange={handleChange}>
        <option value='name'>Alphabetic</option>
        <option value='createdAt'>Date</option>
      </select>
      <select defaultValue={params.dir} name='dir' className='select outline-none' onChange={handleChange}>
        <option value='1'>ASC</option>
        <option value='-1'>DESC</option>
      </select>
      <ModelsFilters />
    </div>
  )
}

export default OrderbyGallery
