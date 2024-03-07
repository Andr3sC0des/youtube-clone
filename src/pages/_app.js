import '@/styles/globals.sass'
import '@fontsource/roboto/400.css'
import { useState } from 'react'
import { popupContext } from '@/context/popupContext'

export default function App ({ Component, pageProps }) {
  const [popup, setPopup] = useState(false)

  return (
    <>
      <popupContext.Provider value={[popup, setPopup]}>
        <Component {...pageProps} />
      </popupContext.Provider>
    </>
  )
}
