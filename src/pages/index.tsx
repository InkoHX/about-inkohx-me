import { NextPage } from 'next'
import Layout from '@Components/Layout'
import { Typography } from '@material-ui/core'

const index: NextPage = () => {
  return (
    <Layout>
      <Typography variant='h1'>Hello Next.js</Typography>
    </Layout>
  )
}

export default index
