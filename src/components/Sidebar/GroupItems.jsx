import styles from './GroupItems.module.sass'

const GroupItems = ({ children, title = '' }) => {
  return (
    <>
      <article className={styles.group}>
        {title !== '' && <h3 className={styles.title}>{title}</h3>}
        {children}
      </article>
    </>
  )
}

export default GroupItems
