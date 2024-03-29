import { DataIcon, GearIcon, GoogleIcon, LanguageIcon, PurchasesIcon, RestrictedModeIcon, ShortcutsIcon, SignOutIcon, SwitchAccountIcon, ThemeIcon, YoutubeStudioIcon } from '@/Icons/Icons'
import GroupItems from '../Sidebar/GroupItems'
import MenuItem from '../Sidebar/MenuItem'
import styles from './ProfileMenu.module.sass'
import { useEffect, useState, useRef, useContext } from 'react'
import { signOut } from 'next-auth/react'
import ProfileInfo from './ProfileInfo'
import { themeContext } from '@/context/themeContext'

const ProfileMenu = () => {
  const [isMenu, setIsMenu] = useState(false)
  const menuRef = useRef()
  const buttonRef = useRef()
  const [theme, setTheme] = useContext(themeContext)

  const handleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  useEffect(() => {
    const handleMenu = (e) => {
      if ((menuRef.current &&
        menuRef.current.contains(e.target)) ||
        (buttonRef.current &&
          buttonRef.current.contains(e.target))) {
        setIsMenu(true)
      } else {
        setIsMenu(false)
      }
      if (buttonRef.current && menuRef.current && buttonRef.current.contains(e.target) && !menuRef.current.contains(e.target)) {
        setIsMenu(false)
      }
    }

    if (window) window.addEventListener('click', handleMenu)

    return () => {
      if (window) window.removeEventListener('click', handleMenu)
    }
  })

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark')
      window.localStorage.setItem('theme', 'dark')
    } else
      if (theme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light')
        window.localStorage.setItem('theme', 'light')
      }
  }, [theme])

  return (
    <>
      <div
        label='Sign Out'
        ref={buttonRef}
        className={styles.avatar}
      >
        <img src='https://unavatar.io/github/andr3sc0des' alt='YouTube Avatar Account' />
        {
          isMenu &&
            <section ref={menuRef} className={styles.menu}>
              <GroupItems customClass={styles.menu__list}>
                <ProfileInfo />
              </GroupItems>
              <GroupItems customClass={styles.menu__list}>
                <MenuItem type='button' customClass={styles.menu__item} icon={<GoogleIcon />} title='Google Account' />
                <MenuItem type='button' customClass={styles.menu__item} icon={<SwitchAccountIcon />} title='Switch Account' />
                <MenuItem type='button' onClick={() => signOut()} customClass={styles.menu__item} icon={<SignOutIcon />} title='Sign Out' />
              </GroupItems>
              <GroupItems customClass={styles.menu__list}>
                <MenuItem type='button' customClass={styles.menu__item} icon={<YoutubeStudioIcon />} title='YouTube Studio' />
                <MenuItem type='button' customClass={styles.menu__item} icon={<PurchasesIcon />} title='Purchases and memberships' />
              </GroupItems>
              <GroupItems customClass={styles.menu__list}>
                <MenuItem type='button' customClass={styles.menu__item} icon={<DataIcon />} title='Your data in YouTube' />
                <MenuItem onClick={handleTheme} type='button' customClass={styles.menu__item} icon={<ThemeIcon />} title='Appearance: Device Theme' />
                <MenuItem type='button' customClass={styles.menu__item} icon={<LanguageIcon />} title='Language: English' />
                <MenuItem type='button' customClass={styles.menu__item} icon={<RestrictedModeIcon />} title='Restricted Mode: Off' />
                <MenuItem type='button' customClass={styles.menu__item} icon={<ShortcutsIcon />} title='Keyboard Shortcuts' />
              </GroupItems>
              <GroupItems customClass={styles.menu__list}>
                <MenuItem type='button' customClass={styles.menu__item} icon={<GearIcon />} title='Settings' />
              </GroupItems>
              <MenuItem type='button' customClass={styles.menu__item} icon={<DataIcon />} title='Help' />
              <MenuItem type='button' customClass={styles.menu__item} icon={<DataIcon />} title='Send Feedback' />
            </section>
        }

      </div>
    </>
  )
}

export default ProfileMenu
