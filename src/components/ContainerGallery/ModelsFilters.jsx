import React from 'react'

import Checkbox from '../../ui/Checkbox'
import useParamsGallery from '../../stores/useParamsGallery'

const ModelsFilters = () => {
  const { params, setParams } = useParamsGallery()

  const handleClick = (e) => {
    if (params.modelos.length < 2 && params.modelos.includes(e.target.name)) return
    if (!params.modelos.includes(e.target.name)) {
      return setParams('modelos', [...params.modelos, e.target.name])
    }
    setParams('modelos', params.modelos.filter(m => m !== e.target.name))
  }

  return (
    <div className='flex justify-start items-center gap-4'>
      <Checkbox
        label='Dall-E'
        name='Dall-E'
        onClick={handleClick}
        isChecked={params.modelos.includes('Dall-E')}
      />
      <Checkbox
        label='Stable Diffusion'
        name='Stable Diffusion'
        onClick={handleClick}
        isChecked={params.modelos.includes('Stable Diffusion')}
      />
    </div>
  )
}

export default ModelsFilters
