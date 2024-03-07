import { ClipIcon, LikeIcon, ShareIcon, DislikeIcon, HorizontalDots } from '@/Icons/Icons'
import styles from './VideoInfo.module.sass'
import Button from '../Button'

const VideoInfo = ({
  title = 'lorem ipsum dolor sit amet',
  channel = 'Channel',
  subscribers = '64.4k'
}) => {
  return (
    <>
      <section className={styles.subscribe}>
        <h1 className={styles.subscribe__title}>{title}</h1>
        <div className={styles.info}>
          <article className={styles.channel}>
            <img className={styles.channel__avatar} src={`https://unavatar.io/youtube/${channel}`} alt='' />
            <div className={styles.channel__info}>
              <h4 className={styles.channel__name}>{channel}</h4>
              <span className={styles.channel__subs}>{subscribers} subscribers</span>
            </div>
            <Button color='white'>
              <span>Subscribe</span>
            </Button>
          </article>
          <article className={styles.actions}>
            <Button type='double'>
              <button><LikeIcon /> 3.5K</button>
              <button><DislikeIcon /></button>
            </Button>
            <Button type='action'><ShareIcon />
              <span>Share</span>
            </Button>
            <Button type='action'>
              <ClipIcon />
              <span>Clip</span>
            </Button>
            <Button type='action' customStyle={{ padding: '0px', height: '36px', width: '36px' }}>
              <HorizontalDots />
            </Button>
          </article>
        </div>
      </section>
    </>
  )
}

export default VideoInfo
