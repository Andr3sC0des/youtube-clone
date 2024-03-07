import Navbar from '@/components/Header/Navbar'
import UseGetShorts from '@/hooks/useGetShorts'
import styles from '@/styles/pages/short.module.sass'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'

const Index = ({ id }) => {
  const { allShorts } = UseGetShorts({})
  const [currentVideo, setCurrentVideo] = useState(id)
  const router = useRouter()
  const shortsRef = useRef(null)

  useEffect(() => {
    import('@/lib/LiteYTEmbed')
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
          <Navbar />
        </header>
        <main ref={shortsRef} id='allShorts' className={styles.content}>
          {
           allShorts.map(short => {
             return (
               <article id={short.shorts.id} key={short.shorts.id} className={`liteYoutube ${styles.video}`}>
                 {
                  currentVideo === short.shorts.id
                    ? <lite-youtube videoid={short.shorts.id} isShort autoplay />
                    : null
                }
               </article>
             )
           })
          }
        </main>
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
