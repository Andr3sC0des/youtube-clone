import { useContext, useEffect, useRef } from 'react'
import { popupContext } from '@/context/popupContext'

const PopupMenu = ({ children, reference }) => {
  const [popup, setPopup] = useContext(popupContext)
  const menuRef = useRef(null)

  useEffect(() => {
    const getClicks = (e) => {
      if (!menuRef.current) return
      if (!reference.current) return
      const inTheMenu = menuRef.current.contains(e.target)
      const inTheButton = reference.current.contains(e.target)

      if (!inTheButton && !inTheMenu) {
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
      {popup && <section style={{ width: 'fit-content' }} ref={menuRef}>{children}</section>}
    </>
  )
}

export default PopupMenu
