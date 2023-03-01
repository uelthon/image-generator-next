import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { v4 as uuid } from 'uuid'

import useGetAllPostsQuery from '../../hooks/useGetAllPostsQuery'
import useParamsGallery from '../../stores/useParamsGallery'
import { CardGallery } from '../../ui/Card'
import Loader from '../Loader'
import { SkeletonGallery } from '../../ui/Skeleton'

const ContainerGallery = () => {
  const { params } = useParamsGallery()
  const { data, isLoading, error, fetchNextPage, hasNextPage } = useGetAllPostsQuery({ params })

  if (isLoading) {
    return (
      <div className='grid grid-cols-2 px-0 md:px-8 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4'>
        <SkeletonGallery />
        <SkeletonGallery />
        <SkeletonGallery />
        <SkeletonGallery />
        <SkeletonGallery />
      </div>
    )
  }
  if (error) return <p className='text-error'>{error.message}</p>

  const posts = data.pages.reduce((prev, curr) => [...prev, ...curr.posts], [])

  return (
    <InfiniteScroll
      dataLength={posts.length}
      hasMore={hasNextPage}
      next={() => fetchNextPage()}
      loader={<Loader />}
      endMessage={<p className='text-center text-lg capitalize font-semibold'>End of the line</p>}
      style={{ overflow: 'hidden' }}
    >
      <>
        <div className='grid grid-cols-2 pb-8 px-0 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 md:px-8'>
          {posts.map(p =>
            <CardGallery
              key={`${p.id}-${uuid()}`}
              image={p.image}
              modelo={p.modelo}
              name={p.name}
              prompt={p.prompt}
              imageId={p.id}
            />
          )}
        </div>
        {posts.length === 0 && <p className='text-3xl'>No results found</p>}
      </>
    </InfiniteScroll>
  )
}

export default ContainerGallery
