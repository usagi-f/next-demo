import { Fragment } from 'react'
import Head from 'next/head'
import Index from '../components/index'

export default () => (
  <Fragment>
    <Head>
      <title>My page title</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Index/>
  </Fragment>
)
