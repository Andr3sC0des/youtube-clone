import Link from 'next/link'
import styles from './VideoCard.module.sass'
import VideoDetails from './VideoDetails'

const VideoCard = ({ id, title, views, publishedDate, channel, duration }) => {
  return (
    <>
      <Link href={`/watch?v=${id}`} className={styles.card} rel='noreferrer'>
        <div className={styles.card__thumbnail}>
          <div className={styles.card__img}>
            <article className={`liteYoutube ${styles.card__video}`}>
              <lite-youtube videoid={id} activeButton autoplay />
            </article>
          </div>
          <span className={styles.card__duration}>{duration}</span>
        </div>
        <VideoDetails
          title={title}
          views={views}
          publishedDate={publishedDate}
          channel={channel}
        />
      </Link>
    </>
  )
}

export default VideoCard
