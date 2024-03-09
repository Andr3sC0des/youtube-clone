import { HistoryIcon, HomeIcon, ShortsIcon, SubsIcon, YouIcon } from '@/Icons/Icons'
import MenuMobileItem from './Sidebar/MenuMobileItem'
import styles from './MobileNavbar.module.sass'

const MobileNavbar = () => {
  return (
    <>
      <footer className={styles.footer}>
        <MenuMobileItem type='footer' title='Home' icon={<HomeIcon />} slug='/' />
        <MenuMobileItem type='footer' title='Shorts' icon={<ShortsIcon />} slug='shorts' />
        <MenuMobileItem type='footer' title='Subscriptions' icon={<SubsIcon />} slug='feed/subscriptions' />
        <MenuMobileItem type='footer' title='You' icon={<YouIcon />} slug='feed/you' />
        <MenuMobileItem type='footer' title='History' icon={<HistoryIcon />} slug='feed/history' />
      </footer>
    </>
  )
}

export default MobileNavbar
