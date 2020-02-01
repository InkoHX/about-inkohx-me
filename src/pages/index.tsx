import React from 'react'
import { NextPage } from 'next'
import MainLayout from '@Components/MainLayout'
import Typography from '@material-ui/core/Typography'
import makeStyle from '@material-ui/core/styles/makeStyles'
import Avatar from '@material-ui/core/Avatar'
import { createStyles } from '@material-ui/core'
import GameFeed from '@/components/GameFeed'
import GetRecentlyPlayedGames, { SteamResponse } from '@/lib/steam/getRecentlyPlayedGames'

type IndexProps = {
  playedGames: SteamResponse | null
}

const MainProfile: React.FunctionComponent = () => {
  const style = makeStyle(theme =>
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

const index: NextPage<IndexProps> = ({
  playedGames
}) => {
  const style = makeStyle({
    title: {
      marginBottom: '2%'
    }
  })()

  return (
    <MainLayout>
      <MainProfile />

      <Typography align='center' component='div'>
        <Typography variant='h6' component='h2' className={style.title}>最近プレイしたゲーム</Typography>
        {
          playedGames !== null
            ? <GameFeed response={playedGames} />
            : <Typography variant='h3' component='p'>ゲームを取得できませんでした。</Typography>
        }
      </Typography>

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
