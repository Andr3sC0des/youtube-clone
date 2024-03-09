import { LeftArrowIcon, MicIcon, SearchIcon } from '@/Icons/Icons'
import styles from './Search.module.sass'
import { useState } from 'react'
import Button from '../Button'

const Search = ({ setAllVideos, customStyle, type, setMobileSearch }) => {
  const [search, setSearch] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    fetch('/api/channels')
      .then(res => res.json())
      .then(data => {
        const result = data.channels.flatMap(channel => {
          return (
            channel.videos.filter(video => {
              return (
                video.title.toLowerCase().includes(search.toLowerCase()) ||
                video.tag.toLowerCase().includes(search.toLowerCase()) ||
                channel.name.toLowerCase().includes(search.toLowerCase())
              )
            }).map(video => ({
              name: channel.name,
              subscribers: channel.subscribers,
              video: {
                id: video.id,
                title: video.title,
                views: video.views,
                likes: video.likes,
                publishedDate: video.publishedDate,
                duration: video.duration,
                tag: video.tag
              }
            }))
          )
        })
        setAllVideos(result)
      })
  }

  if (type === 'mobile') {
    return (
      <form onSubmit={handleSearch} className={styles.mobile}>
        <button aria-label='Close search bar' className={styles.mobile__close} onClick={() => setMobileSearch(false)}><LeftArrowIcon /></button>

        <div>
          <input
            className={styles.mobile__input}
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder='Search'
            type='text'
          />
          <button aria-label='Search videos' className={styles.mobile__button}><SearchIcon /></button>
        </div>

        <Button label='Talk to the microphone to search' customClass={styles.isMobile} onClick={() => console.log('Mic')} type='menu'>
          <MicIcon />
        </Button>
      </form>
    )
  }

  return (
    <>
      <form onSubmit={handleSearch} className={`${styles.search} ${customStyle}`}>
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder='Search' className={styles.search__input}
          type='text'
        />
        <button aria-label='Search videos' className={styles.search__button}><SearchIcon /></button>
      </form>
    </>
  )
}

export default Search
