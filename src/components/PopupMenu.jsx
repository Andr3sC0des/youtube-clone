import { useContext, useEffect, useRef } from 'react'
import { popupContext } from '@/context/popupContext'

const PopupMenu = ({ children, buttonRef }) => {
  const [popup, setPopup] = useContext(popupContext)
  const menuRef = useRef(null)

  useEffect(() => {
    const getClicks = (e) => {
      if (!menuRef.current) return
      if (!buttonRef.current) return
      if (!buttonRef.current.contains(e.target) && !menuRef.current.firstChild.contains(e.target)) {
        setPopup(false)
      }
    }

    window.addEventListener('click', getClicks)
    return () => {
      window.removeEventListener('click', getClicks)
    }
  }, [menuRef])

  return (
    <>
      {popup && <section ref={menuRef}>{children}</section>}
    </>
  )
}

export default PopupMenu
