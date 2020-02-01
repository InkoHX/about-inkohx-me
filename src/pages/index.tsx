import React from 'react'
import { NextPage } from 'next'
import MainLayout from '@Components/MainLayout'
import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Avatar from '@material-ui/core/Avatar'
import { createStyles } from '@material-ui/core'
import GameFeed from '@/components/GameFeed'
import GetRecentlyPlayedGames, { SteamResponse } from '@/lib/steam/getRecentlyPlayedGames'

type IndexProps = {
  playedGames: SteamResponse | null
}

const MainProfile: React.FunctionComponent = () => {
  const style = makeStyles(theme =>
    createStyles({
      root: {
        marginTop: '3%',
        marginBottom: '3%'
      },
      avatar: {
        width: theme.spacing(20),
        height: theme.spacing(20),
        margin: '0 auto',
        marginBottom: '3%'
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
  const style = makeStyles({
    cardTitle: {
      marginBottom: '2%'
    }
  })()

  return (
    <Typography align='center' component='div'>
      <Typography variant='h6' component='h3' className={style.cardTitle}>最近プレイしたゲーム</Typography>
      {
        res !== null
          ? <GameFeed response={res} />
          : <Typography variant='h5' component='p'>ゲームを取得できませんでした。</Typography>
      }
    </Typography>
  )
}

const index: NextPage<IndexProps> = ({
  playedGames
}) => {
  return (
    <MainLayout>
      <MainProfile />

      <GameCards res={playedGames} />

    </MainLayout>
  )
}

index.getInitialProps = async () => {
  try {
    const recentlyPlayedGames = await GetRecentlyPlayedGames()

    return {
      playedGames: recentlyPlayedGames
    }
  } catch (err) {
    return {
      playedGames: null
    }
  }
}

export default index
