import '@/styles/globals.sass'
import '@fontsource/roboto/400.css'
import { useState } from 'react'
import { popupContext } from '@/context/popupContext'
import { themeContext } from '@/context/themeContext'

export default function App ({ Component, pageProps }) {
  const [popup, setPopup] = useState(false)
  const [theme, setTheme] = useState('dark')

  return (
    <>
      <themeContext.Provider value={[theme, setTheme]}>
        <popupContext.Provider value={[popup, setPopup]}>
          <Component {...pageProps} />
        </popupContext.Provider>
      </themeContext.Provider>
    </>
  )
}
