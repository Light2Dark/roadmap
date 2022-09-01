import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Roadmap</title>
        <meta name="description" content="Roadmap learning platform" />
      </Head>
      <h1 className='text-3xl font-bold'>My Roadmaps</h1>
    </div>
  )
}

export default Home
