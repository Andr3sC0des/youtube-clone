import { CloseIcon } from '@/Icons/Icons'
import styles from './Banner.module.css'
import { useRef } from 'react'

const Banner = () => {
  const bannerRef = useRef()

  const handleClose = () => {
    bannerRef.current.style.display = 'none'
  }

  return (
    <>
      <section ref={bannerRef} className={styles.banner}>
        <span className={styles.title}>This is not the official YouTube page. This is a clone and not the authentic site.</span>
        <button onClick={handleClose} className={styles.icon}><CloseIcon /> </button>
      </section>
    </>
  )
}

export default Banner
