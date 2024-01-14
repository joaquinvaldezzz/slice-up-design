import { Head, Html, Main, NextScript } from "next/document"

export default function Document(): JSX.Element {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-body min-w-80 antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
