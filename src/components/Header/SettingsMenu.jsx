import { DataIcon, GearIcon, LanguageIcon, RestrictedModeIcon, SettingsIcon, ShortcutsIcon, ThemeIcon } from '@/Icons/Icons'
import styles from './SettingsMenu.module.sass'
import Button from '../Button'
import { useContext, useEffect, useRef, useState } from 'react'
import GroupItems from '../Sidebar/GroupItems'
import MenuItem from '../Sidebar/MenuItem'
import { themeContext } from '@/context/themeContext'

const SettingsMenu = () => {
  const buttonRef = useRef()
  const menuRef = useRef()
  const [isShow, setIsShow] = useState(false)
  const [theme, setTheme] = useContext(themeContext)

  useEffect(() => {
    const getClicks = (e) => {
      if (
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(e.target) &&
        e.target !== buttonRef.current
      ) {
        setIsShow(false)
      }
    }
    window.addEventListener('click', getClicks)
    return () => {
      window.removeEventListener('click', getClicks)
    }
  }, [])

  const handleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

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
      <div className={styles.container}>
        <Button onClick={() => setIsShow(!isShow)} reference={buttonRef} type='popup'><SettingsIcon /></Button>
        {isShow &&
          <section ref={menuRef} className={styles.menu}>
            <GroupItems customClass={styles.menu__list}>
              <MenuItem type='button' customClass={styles.menu__item} icon={<DataIcon />} title='Your data in YouTube' />
              <MenuItem onClick={handleTheme} type='button' customClass={styles.menu__item} icon={<ThemeIcon />} title='Appearance: Device Theme' />
              <MenuItem type='button' customClass={styles.menu__item} icon={<LanguageIcon />} title='Language: English' />
              <MenuItem type='button' customClass={styles.menu__item} icon={<RestrictedModeIcon />} title='Restricted Mode: Off' />
              <MenuItem type='button' customClass={styles.menu__item} icon={<ShortcutsIcon />} title='Keyboard Shortcuts' />
            </GroupItems>
            <MenuItem type='button' customClass={styles.menu__item} icon={<GearIcon />} title='Settings' />
          </section>}
      </div>
    </>
  )
}

export default SettingsMenu
