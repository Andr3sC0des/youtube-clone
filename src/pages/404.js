import Navbar from '@/components/Header/Navbar'
import styles from '@/styles/pages/notfound.module.sass'
import Head from 'next/head'
import Link from 'next/link'

const NotFound = () => {
  return (
    <>
      <Head>
        <title>404 Not Found</title>
      </Head>
      <section className={styles.container}>
        <Navbar />
      </section>
      <article className={styles.notfound}>
        <img src='/images/notfound.png' alt='Page unavailable' />
        <h1>This page isn't available.
          <span>Sorry about that. Try searching for something else. </span>
        </h1>
        <Link href='/'>Go To Home</Link>
      </article>
    </>
  )
}

export default NotFound
