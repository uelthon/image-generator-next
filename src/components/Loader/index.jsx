import React from 'react'

import styles from './Loader.module.css'

const Loader = ({ height, message }) => {
  return (
    <div style={{
      height,
      width: '100%',
      display: 'grid',
      placeItems: 'center',
      gap: '0.375rem'
    }}
    >
      <div className='flex flex-col items-center gap-1'>
        <svg
          className={styles.ring}
          viewBox='25 25 50 50'
          strokeWidth='5'
        >
          <circle cx='50' cy='50' r='20' />
        </svg>
        {message && <p className='text-neutral'>{message}</p>}
      </div>
    </div>
  )
}

export default Loader
