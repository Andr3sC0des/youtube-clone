import { useEffect, useState } from 'react'

const UseChannels = ({ selectedTag = 'All' }) => {
  const [allVideos, setAllVideos] = useState([])

  useEffect(() => {
    fetch('/api/channels')
      .then(res => res.json())
      .then(data => {
        if (selectedTag === 'All') {
          const result = data.channels.flatMap(channel => {
            return (
              channel.videos.map(video => ({
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
        } else {
          const result = data.channels.flatMap(channel => {
            return (
              channel.videos.filter(video => video.tag.split(', ').find(tag => tag.toLowerCase().includes(selectedTag.toLowerCase()))).map(video => ({
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
        }
      })
  }, [selectedTag])

  return { allVideos, setAllVideos }
}

export default UseChannels
