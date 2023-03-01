import React, { useState } from 'react'
import useCreatePostMutation from '../../hooks/useCreatePostMutation'
import Modal from '../../ui/Modal'
import Loader from '../Loader'

const SavetoGallery = ({ model, prompt, image }) => {
  const [show, setShow] = useState(false)
  const { mutate: createPost, isLoading, error } = useCreatePostMutation()

  const handleSubmit = (e) => {
    e.preventDefault()
    const { imageName } = e.target
    createPost({
      name: imageName.value,
      modelo: model,
      prompt,
      baseImage: image
    },
    {
      onSuccess: () => {
        imageName.value = ''
        setShow(false)
      }
    })
  }

  return (
    <Modal title='Save to Gallery' btnTitle='Save to Gallery' show={show} setShow={setShow}>
      <form
        className='flex flex-col justify-start items-center w-full gap-4'
        onSubmit={handleSubmit}
      >
        {error && <p className='mb-1 text-error'>{error.response.data.error}</p>}
        <input
          type='text'
          className='w-full rounded-xl p-4 bg-black bg-opacity-10 backdrop-blur-md'
          placeholder='Give it a name'
          name='imageName'
          required
        />
        <div className='flex gap-4 items-center'>
          <button
            type='button'
            className='btn btn-secondary normal-case'
            onClick={() => setShow(false)}
            disabled={isLoading}
          >Cancel
          </button>
          <button type='submit' className='btn btn-primary normal-case' disabled={isLoading}>
            {!isLoading ? 'Submit' : <Loader />}
          </button>
        </div>
      </form>
    </Modal>
  )
}

export default SavetoGallery
