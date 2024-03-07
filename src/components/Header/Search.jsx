import { SearchIcon } from '@/Icons/Icons'
import styles from './Search.module.sass'
import { useState } from 'react'

const Search = ({ setAllVideos }) => {
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

  return (
    <>
      <form onSubmit={handleSearch} className={styles.search}>
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder='Search' className={styles.search__input}
          type='text'
        />
        <button className={styles.search__button}><SearchIcon /></button>
      </form>
    </>
  )
}

export default Search
