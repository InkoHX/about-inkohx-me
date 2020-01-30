import Document, { Head, Html, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document'

export default class extends Document {
  public static async getInitialProps (ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  public render () {
    return (
      <Html lang='ja'>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
