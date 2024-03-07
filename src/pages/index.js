import Head from 'next/head'
import styles from '@/styles/pages/index.module.sass'
import Sidebar from '@/components/Sidebar/Sidebar'
import Navbar from '@/components/Header/Navbar'
import { MenuIcon, ToLeftIcon, ToRightIcon } from '@/Icons/Icons'
import { useEffect, useRef, useState } from 'react'
import VideoCard from '@/components/Main/VideoCard'
import Tag from '@/components/Main/Tag'
import Button from '@/components/Button'
import UseChannels from '@/hooks/useChannels'
import UseTags from '@/hooks/useTags'

const Index = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [selectedTag, setSelectedTag] = useState('All')
  const [tags] = UseTags()
  const { allVideos, setAllVideos } = UseChannels({ selectedTag })
  const tagsRef = useRef(null)

  useEffect(() => {
    import('@/lib/LiteYTEmbed')
  }, [])

  const handleToLeft = () => {
    if (tagsRef.current) {
      tagsRef.current.scrollLeft -= 200
    }
  }

  const handleToRight = () => {
    if (tagsRef.current) {
      tagsRef.current.scrollLeft += 200
    }
  }

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
            <Button onClick={() => setIsSidebarOpen(!isSidebarOpen)} type='menu'>
              <MenuIcon />
            </Button>
          </Navbar>
        </header>
        <main className={styles.content}>
          <section className={isSidebarOpen ? styles.tags : styles.tags__collapsed}>
            <div className={`${styles.tags__arrow} ${styles.tags__arrow__left}`}>
              <Button onClick={() => handleToLeft()} type='button'>
                <ToLeftIcon />
              </Button>
            </div>
            <article ref={tagsRef} className={styles.tags__list}>
              {
              tags.map(tag => {
                return (
                  <Tag key={tag} title={tag} selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
                )
              })
              }
            </article>
            <div className={`${styles.tags__arrow} ${styles.tags__arrow__right}`}>
              <Button onClick={() => handleToRight()} type='button'>
                <ToRightIcon />
              </Button>
            </div>
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
          {isSidebarOpen ? <Sidebar /> : <Sidebar type='collapsed' />}
        </aside>
      </section>
    </>
  )
}

export default Index
