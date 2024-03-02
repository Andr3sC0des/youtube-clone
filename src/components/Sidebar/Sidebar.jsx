import { GamingIcon, HistoryIcon, HomeIcon, LearningIcon, MusicIcon, ShortsIcon, SportsIcon, SubsIcon, TrendIcon, UserIcon, YouIcon } from '@/Icons/Icons'
import MenuItem from './MenuItem'
import styles from './Sidebar.module.sass'
import GroupItems from './GroupItems'
import Button from '../Button'
import MenuMobileItem from './MenuMobileItem'

const Sidebar = ({ type = 'normal' }) => {
  return (
    <>
      {
      type === 'normal' &&
        <section className={styles.sidebar}>
          <GroupItems>
            <MenuItem icon={<HomeIcon />} title='Home' />
            <MenuItem icon={<ShortsIcon />} title='Shorts' />
            <MenuItem icon={<SubsIcon />} title='Subscriptions' />
          </GroupItems>
          <GroupItems>
            <MenuItem icon={<YouIcon />} title='You' />
            <MenuItem icon={<HistoryIcon />} title='History' />
          </GroupItems>
          <article className={styles.signin}>
            <p>Sign in to like videos, comment, and subscribe.</p>
            <Button type='sign-in'>
              <UserIcon />
              <span>Sign in</span>
            </Button>
          </article>
          <GroupItems title='Explore'>
            <MenuItem icon={<TrendIcon />} title='Trending' />
            <MenuItem icon={<MusicIcon />} title='Music' />
            <MenuItem icon={<GamingIcon />} title='Gaming' />
            <MenuItem icon={<SportsIcon />} title='Sports' />
            <MenuItem icon={<LearningIcon />} title='Learning' />
          </GroupItems>
        </section>
     }
      {
      type === 'collapsed' &&
        <section className={styles.collapsed}>
          <MenuMobileItem title='Home' icon={<HomeIcon />} />
          <MenuMobileItem title='Shorts' icon={<ShortsIcon />} />
          <MenuMobileItem title='Subscriptions' icon={<SubsIcon />} />
          <MenuMobileItem title='You' icon={<YouIcon />} />
          <MenuMobileItem title='History' icon={<HistoryIcon />} />
        </section>
      }
    </>
  )
}

export default Sidebar
