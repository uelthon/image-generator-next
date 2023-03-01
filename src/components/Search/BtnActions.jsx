import React from 'react'
import { MdOutlineAutoAwesome } from 'react-icons/md'

import { promptDemos } from './promptDemos'

const BtnActions = ({ setInputSearch }) => {
  const handleClick = () => {
    const index = Math.floor(Math.random() * promptDemos.length)
    const frase = promptDemos[index]
    if (frase) {
      setInputSearch(frase)
    }
  }

  return (
    <div className='flex gap-4 items-center'>
      <button type='submit' className='btn btn-primary normal-case'>Generate</button>
      <button
        type='button'
        className='btn btn-secondary btn-outline normal-case'
        onClick={handleClick}
      >
        <MdOutlineAutoAwesome /> I'm feeling lucky
      </button>
    </div>
  )
}

export default BtnActions
