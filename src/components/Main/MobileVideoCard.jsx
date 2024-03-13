import Link from 'next/link'
import styles from './MobileVideoCard.module.sass'
import VideoDetails from './VideoDetails'
import ImageSkeleton from '../ImageSkeleton'

const MobileVIdeoCard = ({ id, title, views, publishedDate, channel, duration }) => {
  return (
    <>
      <section className={styles.card}>
        <Link href={`/watch?v=${id}`} className={styles.card} rel='noreferrer'>
          <div className={styles.card__thumbnail}>
            <div className={styles.card__img}>
              <ImageSkeleton
                id={id}
                alt={title}
                width='100%'
                height='100%'
                src={`https://i.ytimg.com/vi_webp/${id}/hqdefault.webp`}
              />
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
      </section>
    </>
  )
}

export default MobileVIdeoCard
