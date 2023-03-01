import React from 'react'

const Modal = ({ children, title, btnTitle, setShow, show }) => {
  const handleClick = () => setShow(true)
  return (
    <>
      <label onClick={handleClick} className='btn btn-primary normal-case'>{btnTitle}</label>

      <div className={`modal modal-bottom ${show && 'modal-open'} w-full h-screen sm:modal-middle`}>
        <div className='modal-box'>
          <h3 className='font-bold text-lg'>{title}</h3>
          <div className='py-4'>
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
