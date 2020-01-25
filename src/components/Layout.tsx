import * as React from 'react'
import Head from 'next/head'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { createMuiTheme, ThemeProvider, AppBar, Toolbar, Typography, Container, CssBaseline } from '@material-ui/core'

export interface LayoutProps {
  title?: string
  description?: string,
  keyword?: string[]
}

const Layout: React.FunctionComponent<LayoutProps> = ({
  children,
  title = 'About InkoHX',
  description = 'ただの学生デベロッパーについてのプロフィールサイトみたいなやつ',
  keyword = ['inkohx', 'profile']
}) => {
  const isDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const theme = React.useMemo(() => createMuiTheme({
    palette: {
      type: isDarkMode ? 'dark' : 'light'
    }
  }), [isDarkMode])

  return (
    <>
      <Head>
        <title>{title}</title>

        <meta charSet='utf-8' />
        <meta name='description' content={description} />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <meta name='format-detection' content='telephone=no,email=no,address=no' />
        <meta name='author' content='InkoHX' />
        <meta name='keywords' content={keyword?.join()} />
        <meta name='theme-color' content={theme.palette.primary.main} />

        {/**
          * Open Graph Protocol
          */}
        <meta property='og:type' content='website' />
        <meta property='og:title' content={title} />
        <meta property='og:site_name' content='About InkoHX' />
        <meta property='og:description' content={description} />
        <meta property='og:url' content={window.origin} />
        <meta property='og:locale' content='ja_JP' />

        <meta httpEquiv='Content-Language' content='ja' />
        <meta httpEquiv='Content-Type' content='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@InkoHX' />
        <meta name='twitter:creator' content='@InkoHX' />

        <link rel='canonical' href={window.origin} />
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap' />
      </Head>

      <ThemeProvider theme={theme}>
        <CssBaseline />

        <AppBar>
          <Toolbar>
            <Typography variant='h6'>About InkoHX</Typography>
          </Toolbar>
        </AppBar>

        <Toolbar />

        <Container>
          {children}
        </Container>
      </ThemeProvider>
    </>
  )
}

export default Layout
