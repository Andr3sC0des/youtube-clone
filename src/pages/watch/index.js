import Navbar from '@/components/Header/Navbar'
import { useEffect } from 'react'
import styles from '@/styles/pages/watch.module.sass'
import AllMiniVideoCards from '@/components/Main/AllMiniVideoCards'
import VideoInfo from '@/components/Main/VideoInfo'
import Head from 'next/head'
import UseChannels from '@/hooks/useChannels'

const Index = ({ video }) => {
  const { allVideos } = UseChannels({})

  useEffect(() => {
    import('@/lib/LiteYTEmbed')
  }, [])

  return (
    <>
      <Head>
        <title>{video.title}</title>
        <meta name='description' content={video.title} />
      </Head>
      <section className={styles.container}>
        <header className={styles.navbar}>
          <Navbar />
        </header>
        <section className={styles.content}>
          <article className={`liteYoutube ${styles.video}`}>
            <lite-youtube videoid={video.id} />
            <VideoInfo
              title={video.title}
              channel={video.name}
              views={video.views}
              subscribers={video.subscribers}
              likes={video.likes}
            />
          </article>
          <aside className={styles.videos}>
            <AllMiniVideoCards videos={allVideos} />
          </aside>
        </section>
      </section>
    </>
  )
}

export default Index

export async function getServerSideProps (ctx) {
  const { query } = ctx

  const response = await fetch('http://localhost:3000/api/channels')
  const data = await response.json()
  const videoArray = data.channels.flatMap(channel => {
    if (channel.videos.find(video => video.id === query.v)) {
      return {
        ...channel.videos.find(video => video.id === query.v),
        name: channel.name,
        subscribers: channel.subscribers
      }
    }

    return null
  })

  const video = videoArray.filter(video => video !== null)[0]

  if (!query.v) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      video
    }
  }
}
