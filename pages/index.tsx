import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { Toaster } from 'react-hot-toast'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'
import { fetchTweets } from '../twitter-clone-2/utils/fetchTweets'
import {Tweet} from '../typings'
interface Props {
  tweets: Tweet[]
}
const Home = ({tweets}: Props) => {
  //console.log(tweets);
  //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
  return (
    <div className='mx-auto lg:max-w-6xl max-h-screen overflow-hidden'>
      <Head>
        <title>Twitter clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Toaster/>
      <main className='grid grid-cols-9'>
        {/* Sidebar */}
        <Sidebar/>
        {/* Feed */}
        <Feed tweets={tweets}/>
        {/* Widgets */}
        <Widgets/>
      </main>
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (context) => {

  const tweets = await fetchTweets();

  return {
    props: {
      tweets,
    },
  }
  
}