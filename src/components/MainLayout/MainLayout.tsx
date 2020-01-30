import * as React from 'react'
import Head from 'next/head'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core'

import Footer from '../Footer'

interface MainLayoutProps {
  head?: HeadProps
}

type HeadProps = {
  title?: string
  description?: string,
  keyword?: string[]
}

const PageHead: React.FunctionComponent<HeadProps> = ({
  title = 'About InkoHX',
  description = 'ただの学生デベロッパーについてのプロフィールサイトみたいなやつ',
  keyword = ['InkoHX', 'Profile']
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
      <meta property='og:url' content={originUrl || 'about.inkohx.me'} />
      <meta property='og:locale' content='ja_JP' />

      <meta httpEquiv='Content-Language' content='ja' />
      <meta httpEquiv='Content-Type' content='utf-8' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@InkoHX' />
      <meta name='twitter:creator' content='@InkoHX' />

      <link rel='canonical' href={originUrl || 'about.inkohx.me'} />
      <link rel='preload' as='style' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap' />
    </Head>
  )
}

const MainLayout: React.FunctionComponent<MainLayoutProps> = ({
  children,
  head = {}
}) => {
  const isDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const theme = React.useMemo(() => createMuiTheme({
    palette: {
      type: isDarkMode ? 'dark' : 'light'
    }
  }), [isDarkMode])

  return (
    <>
      <PageHead {...head} />

      <ThemeProvider theme={theme}>
        <CssBaseline />

        <AppBar position='relative'>
          <Toolbar>
            <Typography variant='h6' component='p'>About InkoHX</Typography>
          </Toolbar>
        </AppBar>

        <Container component='main'>
          {children}
        </Container>

        <Footer />
      </ThemeProvider>
    </>
  )
}

export default MainLayout
