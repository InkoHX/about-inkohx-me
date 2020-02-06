/* eslint-disable camelcase */
import React from 'react'
import Gird from '@material-ui/core/Grid'
import { SteamResponse, GameInfo } from '@lib/steam/getRecentlyPlayedGames'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/core/styles/makeStyles'

import { Duration } from '@icholy/duration'
import Container from '@material-ui/core/Container'

type GameFeedProps = {
  response: SteamResponse
}

type FilteredGameInfo = GameInfo & {
  name: string,
  img_logo_url: string,
  img_icon_url: string
}

const GameFeed: React.FunctionComponent<GameFeedProps> = ({
  response
}) => {
  const style = makeStyles({
    card: {
      width: 350
    }
  })()

  const data = response.response.games.filter((value, index) => {
    if (index > 2) return
    if (!value.img_icon_url) return
    if (!value.img_logo_url) return
    if (!value.name) return

    return value as FilteredGameInfo
  }) as FilteredGameInfo[]

  return (
    <Container>
      <Gird container spacing={2} alignItems='center' justify='center'>
        {
          data.length === 0
            ? <Typography variant='h5' component='p'>最近プレイしたゲームはありません。</Typography>
            : data.map(value => {
              const url = `https://steamcdn-a.akamaihd.net/steam/apps/${value.appid}/header.jpg`
              const gameUrl = `https://store.steampowered.com/app/${value.appid}`

              const towWeeks = new Duration(`${value.playtime_2weeks}m`).toString()
              const forever = new Duration(`${value.playtime_forever}m`).toString()

              return (
                <Gird item key={value.appid}>
                  <Card className={style.card}>
                    <CardActionArea href={gameUrl}>
                      <CardMedia
                        component='img'
                        image={url}
                        alt={value.name}
                        title={value.name}
                        width='150'
                        height='150'
                        decoding='async'
                      />
                    </CardActionArea>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant='h6'
                        component='h3'
                        noWrap
                      >
                        {value.name}
                      </Typography>
                      <Typography align='left' variant='subtitle1' component='h4'>
                        過去二週間: {towWeeks}<br />
                        合計: {forever}
                      </Typography>
                    </CardContent>
                  </Card>
                </Gird>
              )
            })
        }
      </Gird>
    </Container>
  )
}

export default GameFeed
