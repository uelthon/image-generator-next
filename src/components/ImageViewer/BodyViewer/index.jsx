import React from 'react'
import Details from './Details'
import Viewer from './Viewer'

import styles from './BodyViewer.module.css'

const BodyViewer = ({ name, prompt, modelo, image, createdAt }) => {
  return (
    <div className={`${styles.container} w-full lg:w-[80%] md:w-[90%] sm:w-[95%]`}>
      <Viewer image={image} modelo={modelo} prompt={prompt} />
      <Details name={name} image={image} modelo={modelo} prompt={prompt} createdAt={createdAt} />
    </div>
  )
}

export default BodyViewer
