import React from 'react'
import { GitHubRepository } from '@/lib/github/getRepos'
import Container from '@material-ui/core/Container'
import Gird from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import makeStyles from '@material-ui/core/styles/makeStyles'

export type RepoFeedProps = {
  response: GitHubRepository[]
}

const RepoFeed: React.FunctionComponent<RepoFeedProps> = ({
  response
}) => {
  const repo = response.filter((value, index) => {
    if (index > 2) return
    if (value.disabled) return
    if (value.archived) return
    if (value.private) return

    return value
  })

  const style = makeStyles({
    card: {
      width: 350
    },
    media: {
      backgroundColor: '#fff'
    }
  })()

  return (
    <Container>
      <Gird container spacing={2} alignItems='center' justify='center'>
        {
          repo.map((repository) => {
            return (
              <Gird item key={repository.id}>
                <Card className={style.card}>
                  <CardMedia
                    component='img'
                    className={style.media}
                    src='/images/index/GitHub_Logo.png'
                    title='GitHub Logo'
                    alt='GitHub Logo'
                  />
                  <CardContent>
                    <Typography gutterBottom variant='h6' component='h3' noWrap>
                      {repository.full_name}
                    </Typography>
                    <Typography align='left' variant='subtitle1' component='h4'>
                      {repository.description || '説明無し'}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      href={repository.html_url}
                    >
                      Go repo
                    </Button>
                  </CardActions>
                </Card>
              </Gird>
            )
          })
        }
      </Gird>
    </Container>
  )
}

export default RepoFeed
