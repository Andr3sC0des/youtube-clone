import styles from './VideoCard.module.sass'
import VideoDetails from './VideoDetails'
const VideoCard = ({ url, thumbnail, title, views, publishedDate, channel, duration, avatar }) => {
  return (
    <>
      <a href={url} target='_blank' className={styles.card} rel='noreferrer'>
        <div className={styles.card__thumbnail}>
          <img className={styles.card__img} src={thumbnail} alt={title} />
          <span className={styles.card__duration}>{duration}</span>
        </div>
        <VideoDetails
          title={title}
          views={views}
          publishedDate={publishedDate}
          channel={channel}
          avatar={avatar}
        />
      </a>
    </>
  )
}

export default VideoCard
