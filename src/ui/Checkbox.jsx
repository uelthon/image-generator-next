import React from 'react'

const Checkbox = ({ isChecked = false, label = '', name = '', onClick }) => {
  return (
    <>
      <div className='form-control'>
        <label className='label cursor-pointer gap-1'>
          <span className='label-text font-semibold'>{label}</span>
          <input
            type='checkbox'
            name={name}
            onChange={onClick}
            checked={isChecked}
            className='checkbox checkbox-primary'
          />
        </label>
      </div>
    </>
  )
}

export default Checkbox
