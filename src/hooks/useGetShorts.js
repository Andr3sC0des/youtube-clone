import { useEffect, useState } from 'react'

const UseGetShorts = ({ selectedTag = 'All' }) => {
  const [allShorts, setAllShorts] = useState([])

  useEffect(() => {
    fetch('/api/channels')
      .then(res => res.json())
      .then(data => {
        const result = data.channels.flatMap(channel => {
          return (
            channel.shorts.map(short => ({
              name: channel.name,
              subscribers: channel.subscribers,
              shorts: {
                id: short.id,
                title: short.title,
                comments: short.comments,
                likes: short.likes
              }
            }))
          )
        })
        setAllShorts(result)
      })
  }, [selectedTag])

  return { allShorts, setAllShorts }
}

export default UseGetShorts
