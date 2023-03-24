// import { useEffect } from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'

const SearchGallery = dynamic(() => import('../../components/ContainerGallery/SearchGallery'))
const OrderbyGallery = dynamic(() => import('../../components/ContainerGallery/OrderbyGallery'))
const ContainerGallery = dynamic(() => import('../../components/ContainerGallery'))
const ImageViewer = dynamic(() => import('../../components/ImageViewer'))

export default function Gallery ({ imageId }) {
  // useEffect(() => {
  //   if (!imageId) {
  //     return document.body.classList.remove('overflow-y-hidden')
  //   }
  //   document.body.classList.add('overflow-y-hidden')
  // }, [imageId])

  return (
    <>
      <Head>
        <title>Gallery</title>
      </Head>
      <div className='flex flex-col justify-start gap-4 px-1 pt-8 pb-16 md:px-0'>
        <h1 className='text-3xl font-bold text-center pb-4'>Gallery</h1>
        <SearchGallery />
        <OrderbyGallery />
        <ContainerGallery />
        <ImageViewer id={imageId} />
      </div>
    </>
  )
}

export async function getServerSideProps (context) {
  const imageId = context.params.imageId || ''

  return {
    props: {
      imageId
    }
  }
}
