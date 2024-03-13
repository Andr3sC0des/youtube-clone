import { Html, Head, Main, NextScript } from 'next/document'

export default function Document () {
  return (
    <Html className='html' lang='en'>
      <Head>
        <link rel='preconnect' href='https://unavatar.io' />
        <link rel='preconnect' href='https://i.ytimg.com' />
        <link rel='preconnect' href='https://avatars.githubusercontent.com' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
