import { MenuIcon } from '@/Icons/Icons'
import Button from '@/components/Button'
import Navbar from '@/components/Header/Navbar'
import Sidebar from '@/components/Sidebar/Sidebar'
import styles from '@/styles/pages/notfound.module.sass'
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

const NotFound = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  return (
    <>
      <Head>
        <title>404 Not Found</title>
      </Head>
      <section className={styles.container}>
        <Navbar>
          <Button onClick={() => setIsSidebarOpen(!isSidebarOpen)} type='menu'>
            <MenuIcon />
          </Button>
        </Navbar>
      </section>
      <article className={styles.notfound}>
        <img src='/images/notfound.png' alt='Page unavailable' />
        <h1>This page isn't available.
          <span>Sorry about that. Try searching for something else. </span>
        </h1>
        <Link href='/'>Go To Home</Link>
      </article>
      <aside className={isSidebarOpen ? styles.aside : styles.aside__collapsed}>
        {isSidebarOpen ? <Sidebar /> : <Sidebar type='collapsed' />}
      </aside>
    </>
  )
}

export default NotFound
