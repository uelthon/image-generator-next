import React from 'react'

import Checkbox from '../../ui/Checkbox'
import useSelectModels from '../../stores/useSelectModels'

const ModelsCheck = () => {
  const { models, add, remove } = useSelectModels()

  const handleClick = (e) => {
    if (models.length < 2 && models.includes(e.target.name)) return
    if (!models.includes(e.target.name)) {
      return add(e.target.name)
    }
    remove(e.target.name)
  }

  return (
    <div className='flex items-center gap-4'>
      <Checkbox
        label='Dall-E'
        name='dalle'
        onClick={handleClick}
        isChecked={models.includes('dalle')}
      />
      <Checkbox
        label='Stable Diffusion'
        name='stablediff'
        onClick={handleClick}
        isChecked={models.includes('stablediff')}
      />
    </div>
  )
}

export default ModelsCheck
