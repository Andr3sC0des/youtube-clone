import styles from './MenuMobileItem.module.sass'
const MenuMobileItem = ({ title, icon }) => {
  return (
    <>
      <ul className={styles.item}>
        <i className={styles.icon}>
          {icon}
        </i>
        <span className={styles.title}>{title}</span>
      </ul>
    </>
  )
}

export default MenuMobileItem
