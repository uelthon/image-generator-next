import React, { Suspense } from 'react'
import Loader from '../Loader'

const SuspenseHook = ({ component, height = '50vh' }) => {
  return (
    <Suspense fallback={<Loader height={height} />}>
      {component}
    </Suspense>
  )
}

export default SuspenseHook
