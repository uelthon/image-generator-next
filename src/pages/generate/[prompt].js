import Head from 'next/head'
import dynamic from 'next/dynamic'

import useSelectModels from '../../stores/useSelectModels'

import styles from './Generate.module.css'

const DalleGenerate = dynamic(() => import('../../components/DalleGenerate'))
const StableDiffGenerate = dynamic(() => import('../../components/StableDiffGenerate'))

export default function Generate ({ prompt }) {
  const { models } = useSelectModels()

  return (
    <div className='flex flex-col justify-start w-full gap-8 pt-4 pb-16 min-h-screen px-1 md:px-0'>
      <Head>
        <title>Generate</title>
      </Head>
      <h1 className='text-3xl font-bold text-center'>Result of {prompt}</h1>
      <div className={styles.generate}>
        {
        models.includes('dalle') &&
          <DalleGenerate prompt={prompt} />
}
        {
        models.includes('stablediff') &&
          <StableDiffGenerate prompt={prompt} />
}
      </div>
    </div>
  )
}

export async function getServerSideProps (context) {
  const prompt = context.params.prompt

  return {
    props: {
      prompt
    }
  }
}
