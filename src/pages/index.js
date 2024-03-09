import Head from 'next/head'
import styles from '@/styles/pages/index.module.sass'
import Sidebar from '@/components/Sidebar/Sidebar'
import Navbar from '@/components/Header/Navbar'
import { MenuIcon } from '@/Icons/Icons'
import { useEffect, useState } from 'react'
import VideoCard from '@/components/Main/VideoCard'
import Button from '@/components/Button'
import UseChannels from '@/hooks/useChannels'
import AllTags from '@/components/Main/AllTags'
import MobileNavbar from '@/components/MobileNavbar'

const Index = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [selectedTag, setSelectedTag] = useState('All')
  const { allVideos, setAllVideos } = UseChannels({ selectedTag })

  useEffect(() => {
    import('@/lib/LiteYTEmbed')
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1000) {
        setIsSidebarOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  useEffect(() => {
    if (window.innerWidth < 1000) {
      setIsSidebarOpen(false)
    }
  }, [])

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
          <section className={isSidebarOpen ? styles.tags : styles.tags__collapsed}>
            <AllTags setSelectedTag={setSelectedTag} selectedTag={selectedTag} />
          </section>
          <section className={styles.videos}>
            {
            allVideos.map(video => {
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
