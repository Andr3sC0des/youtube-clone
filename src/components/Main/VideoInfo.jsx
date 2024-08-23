import { ClipIcon, LikeIcon, ShareIcon, DislikeIcon, HorizontalDots, LikedIcon, UnlikedIcon, SubscribedIcon } from '@/Icons/Icons'
import styles from './VideoInfo.module.sass'
import Button from '../Button'
import { LIKE } from '@/consts/LIKE'

const LikeButtons = ({ likeState, setLikeState }) => {
  if (likeState === LIKE.liked) {
    return (
      <Button type='double'>
        <button onClick={() => setLikeState(LIKE.nolike)} aria-label='Button to remove a like'><LikedIcon fill='#fff' /> 3.5K</button>
        <button onClick={() => setLikeState(LIKE.unliked)} aria-label='Button un dislike this video'><DislikeIcon /></button>
      </Button>
    )
  }

  if (likeState === LIKE.nolike) {
    return (
      <Button type='double'>
        <button onClick={() => setLikeState(LIKE.liked)} aria-label='Button to like this video'><LikeIcon fill='#fff' /> 3.5K</button>
        <button onClick={() => setLikeState(LIKE.unliked)} aria-label='Button to dislike this video'><DislikeIcon /></button>
      </Button>
    )
  }
  if (likeState === LIKE.unliked) {
    return (
      <Button type='double'>
        <button onClick={() => setLikeState(LIKE.liked)} aria-label='Button to like this video'><LikeIcon fill='#fff' /> 3.5K</button>
        <button onClick={() => setLikeState(LIKE.nounliked)} aria-label='Button to remove the unlike'><UnlikedIcon /></button>
      </Button>
    )
  }
  if (likeState === LIKE.nounliked) {
    return (
      <Button type='double'>
        <button onClick={() => setLikeState(LIKE.liked)} aria-label='Button to like this video'><LikeIcon fill='#fff' /> 3.5K</button>
        <button onClick={() => setLikeState(LIKE.unliked)} aria-label='Button to dislike this video'><DislikeIcon /></button>
      </Button>
    )
  }
}

const VideoInfo = ({
  title = 'lorem ipsum dolor sit amet',
  channel = 'Channel',
  subscribers = '64.4k',
  likeState,
  setLikeState,
  subscribed,
  setSubscribed

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
            {
              subscribed
                ? <Button onClick={() => setSubscribed(false)} label='Button subscribed' color='dark'><SubscribedIcon /><span>Subscribed</span></Button>
                : <Button onClick={() => setSubscribed(true)} label='Subscribe Button' color='white'><span>Subscribe</span></Button>
            }

          </article>
          <article className={styles.actions}>
            <LikeButtons likeState={likeState} setLikeState={setLikeState} />
            <Button label='Share video' type='action'><ShareIcon />
              <span>Share</span>
            </Button>
            <Button label='Clip video' type='action'>
              <ClipIcon />
              <span>Clip</span>
            </Button>
            <Button label='More actions' type='action' customStyle={{ padding: '0px', height: '36px', width: '36px' }}>
              <HorizontalDots />
            </Button>
          </article>
        </div>
      </section>
    </>
  )
}

export default VideoInfo
