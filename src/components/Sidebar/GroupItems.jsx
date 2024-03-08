import styles from './GroupItems.module.sass'

const GroupItems = ({ children, title = '', customClass }) => {
  return (
    <>
      <article className={`${styles.group} ${customClass}`}>
        {title !== '' && <h3 className={styles.title}>{title}</h3>}
        {children}
      </article>
    </>
  )
}

export default GroupItems
