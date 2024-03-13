import { useEffect, useRef } from 'react'
import styles from './AllTags.module.sass'
import Tag from './Tag'
import Button from '../Button'
import { ToLeftIcon, ToRightIcon } from '@/Icons/Icons'
import tags from '@/db/tags.json'

const AllTags = ({ setSelectedTag, selectedTag }) => {
  const tagsRef = useRef(null)

  const handleToLeft = () => {
    if (tagsRef.current) {
      tagsRef.current.scrollLeft -= 200
    }
  }

  const handleToRight = () => {
    if (tagsRef.current) {
      tagsRef.current.scrollLeft += 200
    }
  }

  useEffect(() => {
    const leftArrow = document.querySelector('#left')
    const rightArrow = document.querySelector('#right')
    const onScroll = () => {
      if (tagsRef.current) {
        if (tagsRef.current.scrollLeft === 0) {
          leftArrow.style.display = 'none'
        } else {
          leftArrow.style.display = 'block'
        }
        if (tagsRef.current.scrollLeft !== 0 && (tagsRef.current.scrollLeft === tagsRef.current.scrollWidth - tagsRef.current.offsetWidth)) {
          rightArrow.style.display = 'none'
        } else {
          rightArrow.style.display = 'block'
        }
      }
    }
    if (tagsRef.current) {
      onScroll()
      tagsRef.current.addEventListener('scroll', onScroll)
    }

    return () => {
      if (tagsRef.current) {
        tagsRef.current.removeEventListener('scroll', onScroll)
      }
    }
  }, [tagsRef])

  return (
    <>
      <section className={styles.container}>
        <div id='left' className={`${styles.alltags__arrow} ${styles.alltags__arrow__left}`}>
          <Button label='Move to the left to see more tags' onClick={() => handleToLeft()} type='button'>
            <ToLeftIcon />
          </Button>
        </div>
        <article ref={tagsRef} className={styles.alltags}>
          {
          tags.map(tag => {
            return (
              <Tag key={tag} title={tag} selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
            )
          })
          }
        </article>
        <div id='right' className={`${styles.alltags__arrow} ${styles.alltags__arrow__right}`}>
          <Button label='Move to the right to see more tags' onClick={() => handleToRight()} type='button'>
            <ToRightIcon />
          </Button>
        </div>
      </section>
    </>
  )
}

export default AllTags
