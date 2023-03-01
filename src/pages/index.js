import Head from 'next/head'
import React from 'react'
import Banner from '../components/Banner'
import Search from '../components/Search'

export default function Home () {
  return (
    <div
      className='flex flex-col px-4 justify-center items-center w-full sm:px-0'
      style={{
        minHeight: 'calc(100vh - 120px)'
      }}
    >
      <Head>
        <meta name='description' content='Experience the power of AI-generated images at Text to Image. Simply describe the image you want in words and watch as our advanced algorithms bring it to life in stunning detail. Explore endless possibilities and unleash your creativity with our cutting-edge technology. Start creating your own AI-generated images today!' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Text to Image' />
        <meta property='og:description' content='Create stunning AI-generated images with ease at [Website Name]. Describe your idea in words and let our advanced algorithms bring it to life. Start exploring endless possibilities and unleash your creativity today!' />
        <meta property='og:image' content='/card.webp' />
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:title' content='Text to Image' />
        <meta property='twitter:description' content='Create stunning AI-generated images with ease at [Website Name]. Describe your idea in words and let our advanced algorithms bring it to life. Start exploring endless possibilities and unleash your creativity today!' />
        <meta property='twitter:image' content='/card.webp' />
        <title>Text to Image</title>
      </Head>
      <div className='flex flex-col w-full justify-start gap-12 sm:w-4/5 '>
        <Banner />
        <Search />
      </div>
    </div>
  )
}
