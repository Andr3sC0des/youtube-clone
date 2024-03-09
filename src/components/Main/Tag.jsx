import styles from './Tag.module.sass'

const Tag = ({ title, setSelectedTag, selectedTag }) => {
  const handleClasses = () => {
    if (selectedTag === title) {
      return (
        [styles.tag, styles.tag__selected].join(' ')
      )
    } else {
      return styles.tag
    }
  }

  return (
    <>
      <button
        aria-label={`${title} tag`}
        onClick={() => setSelectedTag(title)}
        className={handleClasses()}
      >{title}
      </button>
    </>
  )
}

export default Tag
