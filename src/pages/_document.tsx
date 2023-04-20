import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Arteiras</title>
        <meta name="description" content="A gallery " />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" type="text/css" href="./styles/styles.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
