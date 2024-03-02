import styles from './Tag.module.sass'

const Tag = ({ title }) => {
  return (
    <>
      <button className={styles.tag}>{title}</button>
    </>
  )
}

export default Tag
