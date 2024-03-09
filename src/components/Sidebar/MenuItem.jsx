import Link from 'next/link'
import styles from './MenuItem.module.sass'

const MenuItem = ({ slug = '', title = 'Home', icon = 'icon', customStyle, customClass, type, onClick }) => {
  if (type === 'button') {
    return (
      <button aria-label={title} onClick={onClick} style={customStyle} href={`/${slug}`} className={`${styles.item} ${customClass}`}>
        <i className={styles.icon}>{icon}</i>
        <span className={styles.title}>{title}</span>
      </button>
    )
  }

  return (
    <>
      <Link aria-label={title} style={customStyle} href={`/${slug}`} className={`${styles.item} ${customClass}`}>
        <i className={styles.icon}>{icon}</i>
        <span className={styles.title}>{title}</span>
      </Link>
    </>
  )
}

export default MenuItem
