import { SearchIcon } from '@/Icons/Icons'
import styles from './Search.module.sass'
import { useState } from 'react'

const Search = () => {
  const [search, setSearch] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <form onSubmit={handleSearch} className={styles.search}>
        <input value={search} onChange={e => setSearch(e.target.value)} placeholder='Search' className={styles.search__input} type='text' />
        <button className={styles.search__button}><SearchIcon /></button>
      </form>
    </>
  )
}

export default Search
