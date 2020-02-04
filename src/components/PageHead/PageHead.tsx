import React from 'react'
import Head from 'next/head'

type HeadProps = {
  title?: string
  description?: string,
  keyword?: string[]
}

const PageHead: React.FunctionComponent<HeadProps> = ({
  title = 'About InkoHX | InkoHXについて',
  description = 'ただの学生デベロッパーについてのプロフィールサイトみたいなやつ、今のところ最近プレイしたゲームが閲覧できる。',
  keyword = ['InkoHX', 'Profile', 'プロフィール', 'デベロッパー', 'ゲーム']
}) => {
  const originUrl = typeof window !== 'undefined' && window.origin

  return (
    <Head>
      <title>{title}</title>

      <meta charSet='utf-8' />
      <meta name='description' content={description} />
      <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
      <meta name='format-detection' content='telephone=no,email=no,address=no' />
      <meta name='author' content='InkoHX' />
      <meta name='keywords' content={keyword?.join()} />
      <meta name='theme-color' content='#0099ff' />

      {/**
        * Open Graph Protocol
        */}
      <meta property='og:type' content='website' />
      <meta property='og:title' content={title} />
      <meta property='og:site_name' content='About InkoHX' />
      <meta property='og:description' content={description} />
      <meta property='og:image' content='https://about.inkohx.me/images/og-image.png' />
      <meta property='og:url' content={originUrl || 'about.inkohx.me'} />
      <meta property='og:locale' content='ja_JP' />

      <meta httpEquiv='Content-Language' content='ja' />
      <meta httpEquiv='Content-Type' content='utf-8' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@InkoHX' />
      <meta name='twitter:creator' content='@InkoHX' />

      <link rel='preload' as='style' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap' />
    </Head>
  )
}

export default PageHead
