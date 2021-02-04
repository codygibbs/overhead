import Document, { Head, Html, Main, NextScript } from 'next/document'

class AppDocument extends Document {
  render () {
    return (
      <Html>
        <Head />
        <body className="dark:bg-gray-800">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default AppDocument
