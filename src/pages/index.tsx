import React from 'react'
import { NextPage } from 'next'
import MainLayout from '@Components/MainLayout'
import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Avatar from '@material-ui/core/Avatar'
import { createStyles } from '@material-ui/core'

import getRecentlyPlayedGames, { SteamResponse } from '@/lib/steam/getRecentlyPlayedGames'
import GameFeed from '@/components/GameFeed'
import PageHead from '@/components/PageHead'
import getRepos from '@/lib/github'
import { GitHubRepository } from '@/lib/github/getRepos'
import RepoFeed from '@/components/RepoFeed'

type IndexProps = {
  playedGames: SteamResponse | null,
  repos: GitHubRepository[] | null
}

const MainProfile: React.FunctionComponent = () => {
  const style = makeStyles(theme =>
    createStyles({
      root: {
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        marginBottom: theme.spacing(3),
        backgroundColor: theme.palette.background.paper
      },
      avatar: {
        width: theme.spacing(20),
        height: theme.spacing(20),
        margin: '0 auto',
        marginBottom: theme.spacing(3)
      }
    })
  )()

  return (
    <Typography
      align='center'
      component='div'
      className={style.root}
    >
      <Avatar
        className={style.avatar}
        title='InkoHX icon'
        alt='InkoHX icon'
        src='/images/index/inkohx-icon.gif'
      />

      <Typography
        variant='h5'
        component='h1'
      >
        毎日コード書いてGitHubにコミットしまくってる学生です。
      </Typography>
    </Typography>
  )
}

type GameCardProps = {
  res: SteamResponse | null
}

const GameCards: React.FunctionComponent<GameCardProps> = ({
  res
}) => {
  const style = makeStyles(theme =>
    createStyles({
      title: {
        marginBottom: theme.spacing(3)
      }
    })
  )()

  return (
    <Typography align='center' component='div'>
      <Typography variant='h6' component='h2' className={style.title}>最近プレイしたゲーム</Typography>
      {
        res !== null
          ? <GameFeed response={res} />
          : <Typography variant='h5' color='error' component='p'>情報を取得中にエラーが発生しました。</Typography>
      }
    </Typography>
  )
}

type RepoCardProps = {
  res: GitHubRepository[] | null
}

const RepoCards: React.FunctionComponent<RepoCardProps> = ({
  res
}) => {
  const style = makeStyles(theme =>
    createStyles({
      title: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3)
      }
    })
  )()

  return (
    <Typography align='center' component='div'>
      <Typography variant='h6' component='h2' className={style.title}>最近プッシュしたリポジトリ</Typography>
      {
        res !== null
          ? <RepoFeed response={res} />
          : <Typography variant='h5' color='error' component='p'>情報を取得中にエラーが発生しました。</Typography>
      }
    </Typography>
  )
}

const index: NextPage<IndexProps> = ({
  playedGames,
  repos
}) => {
  return (
    <>
      <PageHead />
      <MainLayout>
        <MainProfile />

        <GameCards res={playedGames} />
        <RepoCards res={repos} />

      </MainLayout>
    </>
  )
}

index.getInitialProps = async () => {
  try {
    const recentlyPlayedGames = await getRecentlyPlayedGames()
    const repos = await getRepos()

    return {
      playedGames: recentlyPlayedGames,
      repos: repos
    }
  } catch (err) {
    return {
      playedGames: null,
      repos: null
    }
  }
}

export default index
