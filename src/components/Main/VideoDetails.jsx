import styles from './VideoDetails.module.sass'

const VideoDetails = ({ title, views, publishedDate, channel, avatar }) => {
  return (
    <>
      <section className={styles.details}>
        <i className={styles.avatar}><img src={avatar} alt={channel} /></i>
        <article className={styles.info}>
          <h2 className={styles.title}>{title}</h2>
          <span className={styles.channel}>{channel}</span>
          <p className={styles.views}>{views} views • <span>{publishedDate}</span></p>
        </article>
      </section>
    </>
  )
}

export default VideoDetails
