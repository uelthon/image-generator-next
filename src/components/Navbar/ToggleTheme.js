import React, { useEffect, useState } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'

const ToggleTheme = () => {
  const [selectTheme, setSelectTheme] = useState('night')

  useEffect(() => {
    const html = document.getElementsByTagName('html')[0]
    const theme = window.localStorage.getItem('theme-notes')
    if (theme) {
      setSelectTheme(theme)
      html.setAttribute('data-theme', theme)
    }
  }, [])

  const handleClick = () => {
    const html = document.getElementsByTagName('html')[0]
    const theme = html.getAttribute('data-theme')
    if (theme === 'light') {
      setSelectTheme('night')
      html.setAttribute('data-theme', 'night')
      return window.localStorage.setItem('theme-notes', 'night')
    }
    setSelectTheme('light')
    html.setAttribute('data-theme', 'light')
    window.localStorage.setItem('theme-notes', 'light')
  }

  return (
    <button className='btn btn-circle btn-ghost' onClick={handleClick} aria-label='change thema'>
      {selectTheme === 'light' ? <FiSun size='1.25rem' /> : <FiMoon size='1.25rem' />}
    </button>
  )
}

export default ToggleTheme
