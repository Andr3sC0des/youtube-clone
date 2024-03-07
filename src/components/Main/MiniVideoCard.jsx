import ImageSkeleton from '../ImageSkeleton'
import styles from './MiniVideoCard.module.sass'

const MiniVideoCard = ({ id, title, channel, views, publishedDate }) => {
  return (
    <>
      <a href={`/watch?v=${id}`} className={styles.card}>
        <ImageSkeleton
          id={id}
          aspectRatio='1.73'
          customStyle={{ maxWidth: '168px', borderRadius: '1rem', overflow: 'hidden' }}
          width='100%'
          height='100%'
          src={`https://i.ytimg.com/vi_webp/${id}/maxresdefault.webp`}
          alt={title}
        />
        <div className={styles.card__info}>
          <h2 className={styles.card__title}>{title.length > 42 ? `${title.slice(0, 42)}...` : title}</h2>
          <p className={styles.card__channel}>{channel}</p>
          <span className={styles.card__views}>{views} views • {publishedDate}</span>
        </div>
      </a>
    </>
  )
}

export default MiniVideoCard
