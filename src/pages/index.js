import Head from 'next/head'
import styles from '@/styles/pages/index.module.sass'
import Sidebar from '@/components/Sidebar/Sidebar'
import Navbar from '@/components/Header/Navbar'
import { ToLeftIcon, ToRightIcon } from '@/Icons/Icons'
import { useRef, useState } from 'react'
import VideoCard from '@/components/Main/VideoCard'
import Tag from '@/components/Main/Tag'
import Button from '@/components/Button'
import { MockTags, MockVideos } from '@/utils/mockData'

const Index = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const tagsRef = useRef(null)
  // Tal vez puedo escuchar si el scroll esta en 0 o en el final
  // Si ocurre entonces desaparecer el boton de retroceder y mostrar el de avanzar y asi sucesivamente
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
          <Navbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
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
              MockTags.map(tag => {
                return (
                  <Tag key={tag} title={tag} />
                )
              })
              }
            </article>
            {/* <div className={styles.tags__blur} /> */}
            <div className={`${styles.tags__arrow} ${styles.tags__arrow__right}`}>
              <Button onClick={() => handleToRight()} type='button'>
                <ToRightIcon />
              </Button>
            </div>
          </section>
          <section className={styles.videos}>
            {
              MockVideos.map(video => {
                return (
                  <VideoCard key={video.id} {...video} />
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
