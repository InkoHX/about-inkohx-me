import React from 'react'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import IconButton from '@material-ui/core/IconButton'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { createStyles } from '@material-ui/core'

// Button
import GitHub from '@material-ui/icons/GitHub'
import Twitter from '@material-ui/icons/Twitter'
import Mail from '@material-ui/icons/Mail'

type SocialLink = {
  iconButton: JSX.Element,
  link: string,
  label: string
}

const linkList: Readonly<SocialLink[]> = [
  {
    iconButton: <GitHub />,
    link: 'https://github.com/InkoHX',
    label: 'GitHub'
  },
  {
    iconButton: <Twitter />,
    link: 'https://twitter.com/InkoHX',
    label: 'Twitter'
  },
  {
    iconButton: <Mail />,
    link: 'mailto:inkohx@protonmail.com',
    label: 'Mail Address'
  }
]

const SocialButtons: React.FunctionComponent = () => {
  const style = makeStyles({
    button: {
      margin: '0px 3px'
    }
  })()

  return (
    <>
      {
        linkList.map((data) => {
          return (
            <IconButton
              className={style.button}
              aria-label={data.label}
              href={data.link}
              key={data.label}
            >
              {data.iconButton}
            </IconButton>
          )
        })
      }
    </>
  )
}

const Footer: React.FunctionComponent = () => {
  const style = makeStyles(theme => createStyles({
    root: {
      backgroundColor: theme.palette.background.paper,
      marginTop: '3%',
      padding: '1%'
    },
    linkText: {
      color: theme.palette.info.main
    }
  }))()

  return (
    <Typography
      className={style.root}
      align='center'
      component='footer'
    >

      <SocialButtons />

      <Typography
        variant='h6'
        component='p'
      >
        Copyright &copy; {new Date().getFullYear()} InkoHX All rights reserved. | Powered by <Link className={style.linkText} href='https://zeit.co'>ZEIT Now</Link>
      </Typography>
    </Typography>
  )
}

export default Footer
