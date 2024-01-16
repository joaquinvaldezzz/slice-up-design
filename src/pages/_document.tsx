import { Head, Html, Main, NextScript } from 'next/document'

export default function Document(): JSX.Element {
  return (
    <Html lang="en">
      <Head />
      <body className="min-w-80 bg-body antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
