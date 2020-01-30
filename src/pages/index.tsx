import { NextPage } from 'next'
import MainLayout from '@Components/MainLayout'
import { Typography } from '@material-ui/core'

const index: NextPage = () => {
  return (
    <MainLayout>
      <Typography variant='h1'>About InkoHX</Typography>
    </MainLayout>
  )
}

export default index
