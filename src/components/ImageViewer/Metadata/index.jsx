import Head from 'next/head'
import React from 'react'

const Metadata = ({ image, modelo, name }) => {
  return (
    <Head>
      <title>{name}</title>
      <meta property='og:url' content={window.location.href} />
      <meta property='og:type' content='website' />
      <meta property='og:title' content={name} />
      <meta property='og:description' content={`Image created by AI ${modelo}`} />
      <meta property='og:image' content={image} />
      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:title' content={name} />
      <meta property='twitter:description' content={`Image created by AI ${modelo}`} />
      <meta property='twitter:image' content={image} />
    </Head>
  )
}

export default Metadata
