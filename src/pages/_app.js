import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import NextNProgress from 'nextjs-progressbar'

import Layout from '@/components/Layout'
import ScrolltoTop from '@/components/ScrolltoTop'
import '@/styles/globals.css'

const queryClient = new QueryClient()

export default function App ({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <NextNProgress options={{ showSpinner: false }} />
        <Component {...pageProps} />
        <ScrolltoTop />
      </Layout>
    </QueryClientProvider>
  )
}
