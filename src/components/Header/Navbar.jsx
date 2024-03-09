import { MicIcon, SearchIcon, UserIcon, YouTubeIcon } from '@/Icons/Icons'
import styles from './Navbar.module.sass'
import Link from 'next/link'
import Search from './Search'
import Button from '../Button'
import SettingsMenu from './SettingsMenu'
import { useState } from 'react'

const Navbar = ({ setAllVideos, children }) => {
  const [mobileSearch, setMobileSearch] = useState(false)

  return (
    <>
      <section className={styles.navbar}>
        <ul className={styles.container}>
          {children}
          <Link className={styles.menu__logo} href='/'><YouTubeIcon /></Link>
        </ul>
        <ul className={styles.container__input}>
          <Search customStyle={styles.isDesktop__search} setAllVideos={setAllVideos} />
          <Button label='Talk to the microphone to search' customClass={styles.isDesktop} onClick={() => console.log('Mic')} type='button'>
            <MicIcon />
          </Button>
        </ul>
        <ul className={styles.container}>
          <Button label='Search videos' customClass={styles.isMobile__search} onClick={() => setMobileSearch(true)} type='menu'>
            <SearchIcon />
          </Button>
          {mobileSearch && <Search type='mobile' setMobileSearch={setMobileSearch} setAllVideos={setAllVideos} />}
          <Button label='Talk to the microphone to search' customClass={styles.isMobile} onClick={() => console.log('Mic')} type='menu'>
            <MicIcon />
          </Button>
          <SettingsMenu />
          <li className={styles.menu__item}>
            <Button label='Sign in' onClick={() => console.log('Sign in')} type='sign-in'>
              <UserIcon />
              <span>Sign in</span>
            </Button>
          </li>
        </ul>
      </section>
    </>
  )
}

export default Navbar
