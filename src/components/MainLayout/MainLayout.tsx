import * as React from 'react'

import useMediaQuery from '@material-ui/core/useMediaQuery'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core'

import Footer from '../Footer'

const MainLayout: React.FunctionComponent = ({
  children
}) => {
  const isDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const theme = React.useMemo(() => createMuiTheme({
    palette: {
      type: isDarkMode ? 'dark' : 'light'
    }
  }), [isDarkMode])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <AppBar position='relative'>
        <Toolbar>
          <Typography variant='h6' component='p'>About InkoHX</Typography>
        </Toolbar>
      </AppBar>

      <main>
        {children}
      </main>

      <Footer />
    </ThemeProvider>
  )
}

export default MainLayout
