import { GmailIcon } from '@/Icons/Icons'
import styles from '@/styles/pages/signin.module.sass'
import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'

const Identifier = () => {
  const usernameInputRef = useRef(null)
  const [user, setUser] = useState('')

  useEffect(() => {
    if (usernameInputRef.current) {
      usernameInputRef.current.focus()
    }
  }, [])
  return (
    <>
      <Head>
        <title>Gmail</title>
        <meta name='description' content='Gmail is email that’s intuitive, efficient, and useful. 15 GB of storage, less spam, and mobile access.' />
        <link rel='shortcut icon' href='/google.png' type='image/x-icon' />
      </Head>
      <main className={styles.content}>
        <section className={styles.banner}>
          <p>Please note that this is not Gmail. The default login credentials are as follows: <strong>Username: admin</strong>, <strong>Password: 1234</strong></p>
        </section>
        <article className={styles.card}>
          <aside className={styles.aside}>
            <GmailIcon />
            <h1 className={styles.title}>Sign in</h1>
            <h2 className={styles.subtitle}>to continue to Gmail</h2>
          </aside>
          <form className={styles.form} method='post' action={`/auth/signin/challenge?callbackUrl=${encodeURIComponent(process.env.NEXT_PUBLIC_HOST_URL)}&username=${user}`}>
            <input
              autoFocus
              ref={usernameInputRef}
              onChange={(e) => setUser(e.target.value)}
              className={styles.input}
              type='text'
              name='username'
              placeholder='Email or phone'
            />
            <a href='#' className={styles.link}>Forgot email?</a>
            <div className={styles.info}>
              <p className={styles.description}>Not your computer? Use a Private Window to sign in.</p>
              <a href='#' className={styles.link}>Learn more about using Guest mode</a>
            </div>
            <div className={styles.controls}>
              <a href='#' className={`${styles.link} ${styles.link__account}`}>Create Account</a>
              <button className={styles.button} type='submit'>Next</button>
            </div>
          </form>
        </article>
      </main>
    </>
  )
}

export default Identifier
