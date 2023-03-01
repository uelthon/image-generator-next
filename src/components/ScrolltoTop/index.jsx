import React, { useEffect, useState } from 'react'
import { BiArrowToTop } from 'react-icons/bi'

const ScrolltoTop = () => {
  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false)
    }
  }

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop)
    return () => window.removeEventListener('scroll', checkScrollTop)
  })
  return (
    <button
      className={`btn btn-secondary btn-circle fixed right-8 bottom-[78px] animate-pulse shadow-md ${!showScroll && 'hidden'}`}
      onClick={scrollTop}
    >
      <BiArrowToTop size='1.25rem' />
    </button>
  )
}

export default ScrolltoTop
