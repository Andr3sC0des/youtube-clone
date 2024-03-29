import '@/styles/globals.sass'
import '@fontsource/roboto/400.css'
import { useEffect, useState } from 'react'
import { popupContext } from '@/context/popupContext'
import { themeContext } from '@/context/themeContext'
import { SessionProvider } from 'next-auth/react'

export default function App ({ Component, pageProps }) {
  const [popup, setPopup] = useState(false)
  const [theme, setTheme] = useState(null)

  const isBrowserDefaultDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches

  useEffect(() => {
    if (!window.localStorage.getItem('theme')) {
      if (isBrowserDefaultDark() && !theme) {
        setTheme('dark')
        document.documentElement.setAttribute('data-theme', 'dark')
        window.localStorage.setItem('theme', 'dark')
      } else {
        setTheme('light')
        document.documentElement.setAttribute('data-theme', 'light')
        window.localStorage.setItem('theme', 'light')
      }
    } else {
      setTheme(window.localStorage.getItem('theme'))
    }
  }, [])

  return (
    <>
      <SessionProvider session={pageProps.session}>
        <themeContext.Provider value={[theme, setTheme]}>
          <popupContext.Provider value={[popup, setPopup]}>
            <Component {...pageProps} />
          </popupContext.Provider>
        </themeContext.Provider>
      </SessionProvider>
    </>
  )
}
