import * as React from 'react'
import Head from 'next/head'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Twitter from '@material-ui/icons/Twitter'
import GitHub from '@material-ui/icons/GitHub'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Link from '@material-ui/core/Link'
import IconButton from '@material-ui/core/IconButton'
import { ThemeProvider } from '@material-ui/core'

export interface LayoutProps {
  title?: string
  description?: string,
  keyword?: string[]
}

export interface Social {
  icon: JSX.Element,
  url: string,
  label: string
}

const socialURLs: Social[] = [
  {
    icon: <Twitter />,
    url: 'https://twitter.com/InkoHX',
    label: 'twitter'
  },
  {
    icon: <GitHub />,
    url: 'https://github.com/InkoHX',
    label: 'github'
  }
]

const Layout: React.FunctionComponent<LayoutProps> = ({
  children,
  title = 'About InkoHX',
  description = 'ただの学生デベロッパーについてのプロフィールサイトみたいなやつ',
  keyword = ['inkohx', 'profile']
}) => {
  const isDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const originUrl = typeof window !== 'undefined' && window.origin

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
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
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
        <meta property='og:url' content={originUrl || 'about.inkohx.me'} />
        <meta property='og:locale' content='ja_JP' />

        <meta httpEquiv='Content-Language' content='ja' />
        <meta httpEquiv='Content-Type' content='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@InkoHX' />
        <meta name='twitter:creator' content='@InkoHX' />

        <link rel='canonical' href={originUrl || 'about.inkohx.me'} />
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

        <Container component='main'>
          {children}
        </Container>

        <footer style={{
          backgroundColor: theme.palette.background.paper,
          margin: '3% 0'
        }}
        >
          <Typography variant='body1' align='center'>
            {socialURLs.map((value) => {
              return (
                <IconButton href={value.url} key={value.label}>
                  {value.icon}
                </IconButton>
              )
            })}
          </Typography>
          <Typography variant='subtitle2' align='center' component='p'>
            Powered by <Link href='https://zeit.co'>ZEIT Now</Link>
          </Typography>
        </footer>
      </ThemeProvider>
    </>
  )
}

export default Layout
