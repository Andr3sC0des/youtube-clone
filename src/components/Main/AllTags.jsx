import UseTags from '@/hooks/useTags'
import { useEffect, useRef } from 'react'
import styles from './AllTags.module.sass'
import Tag from './Tag'
import Button from '../Button'
import { ToLeftIcon, ToRightIcon } from '@/Icons/Icons'

const AllTags = ({ setSelectedTag, selectedTag }) => {
  const [tags] = UseTags()
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
          // tagsRef.current.style.paddingLeft = '0px'
        } else {
          leftArrow.style.display = 'block'
          // tagsRef.current.style.paddingLeft = '0px'
        }
        if (tagsRef.current.scrollLeft !== 0 && (tagsRef.current.scrollLeft === tagsRef.current.scrollWidth - tagsRef.current.offsetWidth)) {
          rightArrow.style.display = 'none'
          // tagsRef.current.style.paddingRight = '0px'
        } else {
          rightArrow.style.display = 'block'
          // tagsRef.current.style.paddingRight = '0px'
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
      <div id='left' className={`${styles.alltags__arrow} ${styles.alltags__arrow__left}`}>
        <Button onClick={() => handleToLeft()} type='button'>
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
        <Button onClick={() => handleToRight()} type='button'>
          <ToRightIcon />
        </Button>
      </div>
    </>
  )
}

export default AllTags
