import MiniVideoCard from './MiniVideoCard'
import styles from './AllMiniVideoCards.module.sass'

const AllMiniVideoCards = ({ videos }) => {
  return (
    <>
      <section className={styles.container}>
        {
          videos.map(video => {
            return (
              <MiniVideoCard
                key={video.video.id}
                id={video.video.id}
                title={video.video.title}
                views={video.video.views}
                publishedDate={video.video.publishedDate}
                channel={video.video.channel}
              />
            )
          })
        }
      </section>
    </>
  )
}

export default AllMiniVideoCards
