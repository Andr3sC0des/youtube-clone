import Link from 'next/link'
import styles from './MenuMobileItem.module.sass'
const MenuMobileItem = ({ title, icon, slug }) => {
  return (
    <>
      <Link href={`/${slug}`} className={styles.item}>
        <i className={styles.icon}>
          {icon}
        </i>
        <span className={styles.title}>{title}</span>
      </Link>
    </>
  )
}

export default MenuMobileItem
