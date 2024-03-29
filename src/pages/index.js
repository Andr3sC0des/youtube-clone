import Head from 'next/head'
import styles from '@/styles/pages/index.module.sass'
import Sidebar from '@/components/Sidebar/Sidebar'
import Navbar from '@/components/Header/Navbar'
import { MenuIcon } from '@/Icons/Icons'
import { useEffect, useRef, useState } from 'react'
import VideoCard from '@/components/Main/VideoCard'
import Button from '@/components/Button'
import UseChannels from '@/hooks/useChannels'
import AllTags from '@/components/Main/AllTags'
import MobileNavbar from '@/components/MobileNavbar'
import MobileVideoCard from '@/components/Main/MobileVideoCard'

const Index = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [selectedTag, setSelectedTag] = useState('All')
  const { allVideos, setAllVideos } = UseChannels({ selectedTag })
  const [videosInScreen, setVideosInScreen] = useState(9)
  const IsInScreenRef = useRef(null)

  useEffect(() => {
    import('@/lib/LiteYTEmbed')
  }, [])

  useEffect(() => {
    window.matchMedia('(width <= 1000px)').addEventListener('change', e => {
      setIsSidebarOpen(false)
    })

    return () => {
      window.matchMedia('(width <= 1000px)').removeEventListener('change', e => {
        setIsSidebarOpen(false)
      })
    }
  })

  useEffect(() => {
    if (window.innerWidth < 1000) {
      setIsSidebarOpen(false)
    }
  }, [])

  const callback = (entries) => {
    if (IsInScreenRef.current) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVideosInScreen(prevState => prevState + 6)
        }
      })
    }
  }

  const options = {
    root: null,
    rootMargin: '20px',
    threshold: 1.0
  }

  useEffect(() => {
    const observer = new window.IntersectionObserver(callback, options)
    if (IsInScreenRef) observer.observe(IsInScreenRef.current)

    return () => {
      if (IsInScreenRef.current) observer.unobserve(IsInScreenRef.current)
    }
  }, [IsInScreenRef])

  return (
    <>
      <Head>
        <title>YouTube</title>
        <meta name='description' content='Enjoy the videos and music you love, upload original content, and share it all with friends, family, and the world on YouTube.' />
        <link rel='shortcut icon' href='favicon.ico' type='image/x-icon' />
      </Head>
      <section className={isSidebarOpen ? styles.container : styles.container__collapsed}>
        <header className={styles.navbar}>
          <Navbar setAllVideos={setAllVideos}>
            <Button label='Menu' customClass={styles.isDesktop} onClick={() => setIsSidebarOpen(!isSidebarOpen)} type='menu'>
              <MenuIcon />
            </Button>
          </Navbar>
        </header>
        <main className={styles.content}>
          {isSidebarOpen
            ? <section className={styles.tags}><AllTags setSelectedTag={setSelectedTag} selectedTag={selectedTag} /></section>
            : <section className={styles.tags__collapsed}><AllTags setSelectedTag={setSelectedTag} selectedTag={selectedTag} /></section>}
          <section className={styles.videos}>
            {
            allVideos.slice(0, videosInScreen).map((video, index) => {
              return (
                <VideoCard
                  id={video.video.id}
                  key={video.video.id}
                  channel={video.name}
                  title={video.video.title}
                  views={video.video.views}
                  publishedDate={video.video.publishedDate}
                  duration={video.video.duration}
                />
              )
            })
            }
            <div ref={IsInScreenRef} />
          </section>
          <section className={styles.mobile__videos}>
            {
            allVideos.slice(0, videosInScreen).map(video => {
              return (
                <MobileVideoCard
                  id={video.video.id}
                  key={video.video.id}
                  channel={video.name}
                  title={video.video.title}
                  views={video.video.views}
                  publishedDate={video.video.publishedDate}
                  duration={video.video.duration}
                />
              )
            })
            }
          </section>
          <section className={styles.shorts} />
        </main>
        <aside className={isSidebarOpen ? styles.sidebar : styles.sidebar__collapsed}>
          <Sidebar type={isSidebarOpen ? 'normal' : 'collapsed'} />
        </aside>
        <MobileNavbar />
      </section>
    </>
  )
}

export default Index
