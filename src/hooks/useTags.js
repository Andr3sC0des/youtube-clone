import { useEffect, useState } from 'react'

const UseTags = () => {
  const [tags, setTags] = useState([])

  useEffect(() => {
    fetch('/api/tags')
      .then(res => res.json())
      .then(data => {
        setTags(data.tags)
      })
  }, [])
  return [tags, setTags]
}

export default UseTags
