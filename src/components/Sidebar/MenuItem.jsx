import styles from './MenuItem.module.sass'

const MenuItem = ({ selected = 'home', title = 'Home', icon = 'icon' }) => {
  return (
    <>
      <ul className={styles.item}>
        <i className={styles.icon}>{icon}</i>
        <span className={styles.title}>{title}</span>
      </ul>
    </>
  )
}

export default MenuItem
