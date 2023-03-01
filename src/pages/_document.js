import { Html, Head, Main, NextScript } from 'next/document'

export default function Document () {
  return (
    <Html lang='en' data-theme='night'>
      <Head>
        <link rel='icon' type='image/svg+xml' href='/vite.svg' />
        <meta name='robots' content='index, follow' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
