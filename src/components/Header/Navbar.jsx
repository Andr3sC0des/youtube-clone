import { MenuIcon, MicIcon, SettingsIcon, UserIcon, YouTubeIcon } from '@/Icons/Icons'
import styles from './Navbar.module.sass'
import Link from 'next/link'
import Search from './Search'
import Button from '../Button'

const Navbar = ({ setIsSidebarOpen, isSidebarOpen, setAllVideos }) => {
  return (
    <>
      <section className={styles.navbar}>
        <ul className={styles.container}>
          <Button onClick={() => setIsSidebarOpen(!isSidebarOpen)} type='menu'>
            <MenuIcon />
          </Button>
          <Link className={styles.menu__logo} href='/'><YouTubeIcon /></Link>
        </ul>
        <ul className={styles.container}>
          <Search setAllVideos={setAllVideos} />
          <Button onClick={() => console.log('Mic')} type='button'>
            <MicIcon />
          </Button>
        </ul>
        <ul className={styles.container}>
          <Button onClick={() => console.log('Settings')} type='popup'>
            <SettingsIcon />
          </Button>
          <li className={styles.menu__item}>
            <Button onClick={() => console.log('Sign in')} type='sign-in'>
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
