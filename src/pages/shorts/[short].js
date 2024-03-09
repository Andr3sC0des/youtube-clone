import { CommentIcon, HistoryIcon, HomeIcon, MenuIcon, SettingsIcon, ShareIcon, ShortLikeIcon, ShortUnlikeIcon, ShortsIcon, SubsIcon, YouIcon } from '@/Icons/Icons'
import Button from '@/components/Button'
import Navbar from '@/components/Header/Navbar'
import MenuMobileItem from '@/components/Sidebar/MenuMobileItem'
import Sidebar from '@/components/Sidebar/Sidebar'
import UseGetShorts from '@/hooks/useGetShorts'
import styles from '@/styles/pages/short.module.sass'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'

const Index = ({ id }) => {
  const { allShorts } = UseGetShorts({})
  const [currentVideo, setCurrentVideo] = useState(id)
  const router = useRouter()
  const shortsRef = useRef(null)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

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

  useEffect(() => {
    const handleScroll = () => {
      const container = document.getElementById('allShorts')
      const scrollPosition = container.scrollTop
      const videoHeight = container.clientHeight
      const currentIndex = Math.floor(scrollPosition / videoHeight)

      setCurrentVideo(allShorts[currentIndex].shorts.id)

      if (currentIndex < allShorts.length) {
        router.replace(`/shorts/${allShorts[currentIndex].shorts.id}`)
      }
    }

    const container = document.getElementById('allShorts')
    container.addEventListener('scroll', handleScroll)

    return () => {
      container.removeEventListener('scroll', handleScroll)
    }
  })

  useEffect(() => {
    const video = document.getElementById(id)
    video?.scrollIntoView({ behavior: 'smooth' })
  }, [allShorts])

  return (
    <>
      <section className={styles.container}>
        <header className={styles.navbar}>
          <Navbar>
            <Button onClick={() => setIsSidebarOpen(!isSidebarOpen)} type='menu'>
              <MenuIcon />
            </Button>
          </Navbar>
        </header>
        <main ref={shortsRef} id='allShorts' className={styles.content}>
          {
           allShorts.map(short => {
             return (
               <section className={styles.videocontainer} key={short.shorts.id}>
                 <article id={short.shorts.id} className={`liteYoutube ${styles.video}`}>
                   {
                   currentVideo === short.shorts.id
                     ? <lite-youtube videoid={short.shorts.id} isShort autoplay />
                     : null
                  }
                   <aside className={styles.mobilesidebar}>
                     <div className={styles.button}>
                       <Button type='shorticon'>
                         <ShortLikeIcon />
                       </Button>
                       <span>714K</span>
                     </div>
                     <div className={styles.button}>
                       <Button type='shorticon'>
                         <ShortUnlikeIcon />
                       </Button>
                       <span>Dislike</span>
                     </div>
                     <div className={styles.button}>
                       <Button type='shorticon'>
                         <CommentIcon />
                       </Button>
                       <span>1,331</span>
                     </div>
                     <div className={styles.button}>
                       <Button type='shorticon'>
                         <ShareIcon />
                       </Button>
                       <span>Share</span>
                     </div>
                     <Button type='shorticon'>
                       <SettingsIcon />
                     </Button>
                     <img src={`https://unavatar.io/youtube/${short.name}`} alt='' />
                   </aside>
                 </article>
                 <aside className={styles.sidebar}>
                   <div className={styles.button}>
                     <Button type='short'>
                       <ShortLikeIcon />
                     </Button>
                     <span>714K</span>
                   </div>
                   <div className={styles.button}>
                     <Button type='short'>
                       <ShortUnlikeIcon />
                     </Button>
                     <span>Dislike</span>
                   </div>
                   <div className={styles.button}>
                     <Button type='short'>
                       <CommentIcon />
                     </Button>
                     <span>1,331</span>
                   </div>
                   <div className={styles.button}>
                     <Button type='short'>
                       <ShareIcon />
                     </Button>
                     <span>Share</span>
                   </div>
                   <Button type='short'>
                     <SettingsIcon />
                   </Button>
                   <img src={`https://unavatar.io/youtube/${short.name}`} alt='' />
                 </aside>
               </section>
             )
           })
          }
        </main>
        <aside className={isSidebarOpen ? styles.aside : styles.aside__collapsed}>
          {isSidebarOpen ? <Sidebar /> : <Sidebar type='collapsed' />}
        </aside>

        <footer className={styles.footer}>
          <MenuMobileItem type='footer' title='Home' icon={<HomeIcon />} slug='/' />
          <MenuMobileItem type='footer' title='Shorts' icon={<ShortsIcon />} slug='shorts' />
          <MenuMobileItem type='footer' title='Subscriptions' icon={<SubsIcon />} slug='feed/subscriptions' />
          <MenuMobileItem type='footer' title='You' icon={<YouIcon />} slug='feed/you' />
          <MenuMobileItem type='footer' title='History' icon={<HistoryIcon />} slug='feed/history' />
        </footer>
      </section>
    </>
  )
}

export default Index

export async function getServerSideProps (ctx) {
  const { query } = ctx

  return {
    props: {
      id: query.short
    }
  }
}
