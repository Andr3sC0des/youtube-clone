import Head from 'next/head'
import styles from '@/styles/pages/index.module.sass'
import Sidebar from '@/components/Sidebar/Sidebar'
import Navbar from '@/components/Header/Navbar'
import { ToLeftIcon, ToRightIcon } from '@/Icons/Icons'
import { useRef, useState } from 'react'
import VideoCard from '@/components/Main/VideoCard'
import Tag from '@/components/Main/Tag'
import Button from '@/components/Button'

const Index = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const MockVideos = [
    {
      id: 1,
      url: 'https://www.youtube.com/watch?v=fe8R45JSnbw',
      thumbnail: 'https://i.ytimg.com/vi/KtoztHyo2Bw/maxresdefault.jpg',
      title: 'Exploring NIGERIA: “the monster of Africa” | Is it as dangerous as they say? 🇳🇬',
      views: '2,718,490',
      publishedDate: '1 day ago',
      channel: 'Luisito Comunica',
      duration: '12:10',
      avatar: 'https://yt3.ggpht.com/ytc/AIdro_nMt5PhvIFKldKimlPNdriSJn9_pADPDKwPkBxTGQ=s48-c-k-c0x00ffffff-no-rj'
    },
    {
      id: 2,
      url: 'https://www.youtube.com/watch?v=fe8R45JSnbw',
      thumbnail: 'https://i.ytimg.com/vi/KtoztHyo2Bw/maxresdefault.jpg',
      title: 'Exploring NIGERIA: “the monster of Africa” | Is it as dangerous as they say? 🇳🇬',
      views: '2,718,490',
      publishedDate: '1 day ago',
      channel: 'Luisito Comunica',
      duration: '12:10',
      avatar: 'https://yt3.ggpht.com/ytc/AIdro_nMt5PhvIFKldKimlPNdriSJn9_pADPDKwPkBxTGQ=s48-c-k-c0x00ffffff-no-rj'
    },
    {
      id: 3,
      url: 'https://www.youtube.com/watch?v=fe8R45JSnbw',
      thumbnail: 'https://i.ytimg.com/vi/KtoztHyo2Bw/maxresdefault.jpg',
      title: 'Exploring NIGERIA: “the monster of Africa” | Is it as dangerous as they say? 🇳🇬',
      views: '2,718,490',
      publishedDate: '1 day ago',
      channel: 'Luisito Comunica',
      duration: '12:10',
      avatar: 'https://yt3.ggpht.com/ytc/AIdro_nMt5PhvIFKldKimlPNdriSJn9_pADPDKwPkBxTGQ=s48-c-k-c0x00ffffff-no-rj'
    },
    {
      id: 4,
      url: 'https://www.youtube.com/watch?v=fe8R45JSnbw',
      thumbnail: 'https://i.ytimg.com/vi/KtoztHyo2Bw/maxresdefault.jpg',
      title: 'Exploring NIGERIA: “the monster of Africa” | Is it as dangerous as they say? 🇳🇬',
      views: '2,718,490',
      publishedDate: '1 day ago',
      channel: 'Luisito Comunica',
      duration: '12:10',
      avatar: 'https://yt3.ggpht.com/ytc/AIdro_nMt5PhvIFKldKimlPNdriSJn9_pADPDKwPkBxTGQ=s48-c-k-c0x00ffffff-no-rj'
    },
    {
      id: 5,
      url: 'https://www.youtube.com/watch?v=fe8R45JSnbw',
      thumbnail: 'https://i.ytimg.com/vi/KtoztHyo2Bw/maxresdefault.jpg',
      title: 'Exploring NIGERIA: “the monster of Africa” | Is it as dangerous as they say? 🇳🇬',
      views: '2,718,490',
      publishedDate: '1 day ago',
      channel: 'Luisito Comunica',
      duration: '12:10',
      avatar: 'https://yt3.ggpht.com/ytc/AIdro_nMt5PhvIFKldKimlPNdriSJn9_pADPDKwPkBxTGQ=s48-c-k-c0x00ffffff-no-rj'
    },
    {
      id: 6,
      url: 'https://www.youtube.com/watch?v=fe8R45JSnbw',
      thumbnail: 'https://i.ytimg.com/vi/KtoztHyo2Bw/maxresdefault.jpg',
      title: 'Exploring NIGERIA: “the monster of Africa” | Is it as dangerous as they say? 🇳🇬',
      views: '2,718,490',
      publishedDate: '1 day ago',
      channel: 'Luisito Comunica',
      duration: '12:10',
      avatar: 'https://yt3.ggpht.com/ytc/AIdro_nMt5PhvIFKldKimlPNdriSJn9_pADPDKwPkBxTGQ=s48-c-k-c0x00ffffff-no-rj'
    },
    {
      id: 7,
      url: 'https://www.youtube.com/watch?v=fe8R45JSnbw',
      thumbnail: 'https://i.ytimg.com/vi/KtoztHyo2Bw/maxresdefault.jpg',
      title: 'Exploring NIGERIA: “the monster of Africa” | Is it as dangerous as they say? 🇳🇬',
      views: '2,718,490',
      publishedDate: '1 day ago',
      channel: 'Luisito Comunica',
      duration: '12:10',
      avatar: 'https://yt3.ggpht.com/ytc/AIdro_nMt5PhvIFKldKimlPNdriSJn9_pADPDKwPkBxTGQ=s48-c-k-c0x00ffffff-no-rj'
    },
    {
      id: 8,
      url: 'https://www.youtube.com/watch?v=fe8R45JSnbw',
      thumbnail: 'https://i.ytimg.com/vi/KtoztHyo2Bw/maxresdefault.jpg',
      title: 'Exploring NIGERIA: “the monster of Africa” | Is it as dangerous as they say? 🇳🇬',
      views: '2,718,490',
      publishedDate: '1 day ago',
      channel: 'Luisito Comunica',
      duration: '12:10',
      avatar: 'https://yt3.ggpht.com/ytc/AIdro_nMt5PhvIFKldKimlPNdriSJn9_pADPDKwPkBxTGQ=s48-c-k-c0x00ffffff-no-rj'
    },
    {
      id: 9,
      url: 'https://www.youtube.com/watch?v=fe8R45JSnbw',
      thumbnail: 'https://i.ytimg.com/vi/KtoztHyo2Bw/maxresdefault.jpg',
      title: 'Exploring NIGERIA: “the monster of Africa” | Is it as dangerous as they say? 🇳🇬',
      views: '2,718,490',
      publishedDate: '1 day ago',
      channel: 'Luisito Comunica',
      duration: '12:10',
      avatar: 'https://yt3.ggpht.com/ytc/AIdro_nMt5PhvIFKldKimlPNdriSJn9_pADPDKwPkBxTGQ=s48-c-k-c0x00ffffff-no-rj'
    }
  ]

  const MockTags = [
    'All',
    'History',
    'Thrillers',
    'Gaming',
    'Roads',
    'Factories',
    'Martial Arts Movies',
    'Dramedy',
    'Premieres',
    'Machines',
    'Motorcycles',
    'Telenovelas',
    'Camping',
    'Wilderness',
    'Live',
    'Game Shows',
    'Home improvement',
    'Tourist destinations',
    'Cars',
    'Recently uploaded'
  ]

  const tagsRef = useRef(null)
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
