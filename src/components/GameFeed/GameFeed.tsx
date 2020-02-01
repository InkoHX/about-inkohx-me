import React from 'react'
import Gird from '@material-ui/core/Grid'
import { SteamResponse } from '@lib/steam/getRecentlyPlayedGames'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/core/styles/makeStyles'

import { Duration } from '@icholy/duration'

type GameFeedProps = {
  response: SteamResponse
}

const GameFeed: React.FunctionComponent<GameFeedProps> = ({
  response
}) => {
  const style = makeStyles({
    card: {
      width: 470,
      height: 300
    }
  })()

  const data = response.response.games

  return (
    <Gird container spacing={3} alignItems='center' justify='center'>
      {
        data.map((value) => {
          if (!value.img_icon_url) return
          if (!value.img_logo_url) return
          if (!value.name) return

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
                  />
                </CardActionArea>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h5'
                    component='h3'
                  >
                    {value.name}
                  </Typography>
                  <Typography align='left' variant='subtitle1' component='p'>
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
  )
}

export default GameFeed
