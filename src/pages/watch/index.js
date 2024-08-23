import Navbar from '@/components/Header/Navbar'
import { useContext, useEffect, useRef, useState } from 'react'
import styles from '@/styles/pages/watch.module.sass'
import AllMiniVideoCards from '@/components/Main/AllMiniVideoCards'
import VideoInfo from '@/components/Main/VideoInfo'
import Head from 'next/head'
import UseChannels from '@/hooks/useChannels'
import { MenuIcon } from '@/Icons/Icons'
import Button from '@/components/Button'
import { popupContext } from '@/context/popupContext'
import Sidebar from '@/components/Sidebar/Sidebar'
import PopupMenu from '@/components/PopupMenu'
import AllTags from '@/components/Main/AllTags'
import { useSession } from 'next-auth/react'
import { LIKE } from '@/consts/LIKE'

const Index = ({ video }) => {
  const [popup, setPopup] = useContext(popupContext)
  const buttonRef = useRef(null)
  const [selectedTag, setSelectedTag] = useState('All')
  const { allVideos, setAllVideos } = UseChannels({ selectedTag })
  const { data: session } = useSession()
  const [likeState, setLikeState] = useState(LIKE.nolike)
  const [subscribed, setSubscribed] = useState(false)

  useEffect(() => {
    import('@/lib/LiteYTEmbed')
  }, [])

  useEffect(() => {
    if (session && session.user.likedVideos.includes(video.id)) {
      setLikeState(LIKE.liked)
    }
  }, [session])

  useEffect(() => {
    if (session && session.user.following.includes(video.name)) {
      setSubscribed(true)
    }
  }, [session])

  return (
    <>
      <Head>
        <title>{video.title}</title>
        <meta name='description' content={video.title} />
      </Head>
      <section className={styles.container}>
        <header className={styles.navbar}>
          <Navbar setAllVideos={setAllVideos}>
            <Button label='Menu' reference={buttonRef} onClick={() => setPopup(!popup)} type='menu'>
              <MenuIcon />
            </Button>
          </Navbar>
          <PopupMenu reference={buttonRef}>
            <Sidebar />
          </PopupMenu>
        </header>
        <section className={styles.content}>
          <div>
            <article className={`liteYoutube ${styles.video}`}>
              <lite-youtube videoid={video.id} />
            </article>
            <VideoInfo
              title={video.title}
              channel={video.name}
              views={video.views}
              subscribers={video.subscribers}
              likes={video.likes}
              likeState={likeState}
              setLikeState={setLikeState}
              subscribed={subscribed}
              setSubscribed={setSubscribed}
            />
          </div>
          <aside className={styles.videos}>
            <div className={styles.videos__tags}>
              <AllTags setSelectedTag={setSelectedTag} selectedTag={selectedTag} />
            </div>
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

  const response = await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/api/channels`)
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
