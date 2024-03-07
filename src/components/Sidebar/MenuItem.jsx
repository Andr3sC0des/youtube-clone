import Link from 'next/link'
import styles from './MenuItem.module.sass'

const MenuItem = ({ slug = '', title = 'Home', icon = 'icon' }) => {
  return (
    <>
      <Link href={`/${slug}`} className={styles.item}>
        <i className={styles.icon}>{icon}</i>
        <span className={styles.title}>{title}</span>
      </Link>
    </>
  )
}

export default MenuItem
