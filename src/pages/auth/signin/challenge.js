import { ChevronDownIcon, GmailIcon, UsernameIcon } from '@/Icons/Icons'
import styles from '@/styles/pages/signin.module.sass'
import { getCsrfToken } from 'next-auth/react'
import Head from 'next/head'
import { useEffect, useRef } from 'react'

const Challenge = ({ csrfToken, username }) => {
  const passwordInputRef = useRef(null)
  const GoBack = () => {
    window.history.back()
  }

  useEffect(() => {
    if (passwordInputRef.current) {
      passwordInputRef.current.focus()
    }
  }, [])

  const handleCheckbox = (e) => {
    if (e.target.checked && passwordInputRef.current) {
      passwordInputRef.current.type = 'text'
    } else {
      passwordInputRef.current.type = 'password'
    }
  }

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
            <h1 className={styles.title}>Welcome</h1>
            <button onClick={GoBack} className={styles.username}>
              <UsernameIcon />
              <span>{username}@gmail.com</span>
              <ChevronDownIcon />
            </button>
          </aside>
          <form className={styles.form} method='post' action='/api/auth/callback/credentials'>
            <input
              ref={passwordInputRef}
              autoFocus
              className={styles.input}
              name='password'
              type='password'
              placeholder='Enter your password'
            />
            <label className={styles.checkbox} htmlFor='showpassword'>
              <input onChange={(e) => handleCheckbox(e)} type='checkbox' name='' id='showpassword' />
              Show password
            </label>
            <input name='csrfToken' type='hidden' defaultValue={csrfToken} />
            <input className={styles.input} type='hidden' name='username' placeholder='Email or phone' defaultValue={username} />
            <div className={styles.signin}>
              <a href='#' className={`${styles.link} ${styles.link__account}`}>Forgot password?</a>
              <button className={styles.button} type='submit'>Next</button>
            </div>
          </form>
        </article>
      </main>
    </>
  )
}

export default Challenge

export async function getServerSideProps (context) {
  const username = context.query.username

  return {
    props: {
      csrfToken: await getCsrfToken(context),
      username
    }
  }
}
