/* eslint-disable camelcase */
import fetch from 'node-fetch'

export type GameInfo = {
  appid: number,
  name?: string,
  playtime_2weeks: number,
  playtime_forever: number,
  img_icon_url?: string,
  img_logo_url?: string,
  playtime_windows_forever: number,
  playtime_mac_forever: number,
  playtime_linux_forever: number
}

export type SteamResponse = {
  response: {
    total_count: number,
    games: GameInfo[]
  }
}

const token = process.env.STEAM_API_KEY
const userId = process.env.STEAM_USER_ID64

const GetRecentlyPlayedGames = async () => {
  if (!token) throw new Error('"STEAM_API_KEY" is not set.')
  if (!userId) throw new Error('"STEAM_USER_ID64" is not set.')

  const url = `http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001?key=${token}&steamid=${userId}&format=json`

  const data: SteamResponse = await fetch(url)
    .then(res => res.json())
    .catch(console.error)

  return data
}

export default GetRecentlyPlayedGames
