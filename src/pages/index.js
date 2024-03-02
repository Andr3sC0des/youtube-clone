import Head from 'next/head'
import styles from '@/styles/pages/index.module.sass'
import Sidebar from '@/components/Sidebar/Sidebar'
import Navbar from '@/components/Header/Navbar'

const Index = () => {
  return (
    <>
      <Head>
        <title>YouTube</title>
        <meta name='description' content='Enjoy the videos and music you love, upload original content, and share it all with friends, family, and the world on YouTube.' />
        <link rel='shortcut icon' href='favicon.ico' type='image/x-icon' />
      </Head>
      <section className={styles.container}>
        <header className={styles.navbar}>
          <Navbar />
        </header>
        <main className={styles.content}>
          <section className={styles.tags}>...</section>
          <section className={styles.videos}>...</section>
          <section className={styles.shorts}>...</section>
        </main>
        <aside className={styles.sidebar}>
          <Sidebar />
        </aside>

      </section>
    </>
  )
}

export default Index
