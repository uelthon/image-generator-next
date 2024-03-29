import dynamic from 'next/dynamic'
import Head from 'next/head'

const SearchGallery = dynamic(() => import('../../components/ContainerGallery/SearchGallery'))
const OrderbyGallery = dynamic(() => import('../../components/ContainerGallery/OrderbyGallery'))
const ContainerGallery = dynamic(() => import('../../components/ContainerGallery'))

export default function Gallery () {
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
      </div>
    </>
  )
}
