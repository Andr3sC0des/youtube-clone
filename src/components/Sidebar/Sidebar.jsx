import { GamingIcon, HistoryIcon, HomeIcon, LearningIcon, MusicIcon, ShortsIcon, SportsIcon, SubsIcon, TrendIcon, UserIcon, YouIcon } from '@/Icons/Icons'
import MenuItem from './MenuItem'
import styles from './Sidebar.module.sass'
import GroupItems from './GroupItems'
import Button from '../Button'
import MenuMobileItem from './MenuMobileItem'
import { signIn, useSession } from 'next-auth/react'

const Sidebar = ({ type = 'normal', customStyle }) => {
  const { data: session } = useSession()

  return (
    <>
      {
      (type === 'normal') &&
        <section className={styles.sidebar}>
          <GroupItems>
            <MenuItem icon={<HomeIcon />} title='Home' />
            <MenuItem icon={<ShortsIcon />} title='Shorts' slug='shorts' />
            <MenuItem icon={<SubsIcon />} title='Subscriptions' slug='feed/subscriptions' />
          </GroupItems>
          <GroupItems>
            <MenuItem icon={<YouIcon />} title='You' slug='feed/you' />
            <MenuItem icon={<HistoryIcon />} title='History' slug='feed/history' />
          </GroupItems>
          {
            session
              ? ''
              : <article className={styles.signin}>
                <p>Sign in to like videos, comment, and subscribe.</p>
                <Button onClick={() => signIn()} label='Sign in' type='sign-in'>
                  <UserIcon />
                  <span>Sign in</span>
                </Button>
              </article>
          }

          <GroupItems title='Explore'>
            <MenuItem icon={<TrendIcon />} title='Trending' />
            <MenuItem icon={<MusicIcon />} title='Music' />
            <MenuItem icon={<GamingIcon />} title='Gaming' slug='gaming' />
            <MenuItem icon={<SportsIcon />} title='Sports' />
            <MenuItem icon={<LearningIcon />} title='Learning' />
          </GroupItems>
        </section>
     }
      {
      (type === 'collapsed') &&
        <section className={styles.collapsed}>
          <MenuMobileItem title='Home' icon={<HomeIcon />} slug='/' />
          <MenuMobileItem title='Shorts' icon={<ShortsIcon />} slug='shorts' />
          <MenuMobileItem title='Subscriptions' icon={<SubsIcon />} slug='feed/subscriptions' />
          <MenuMobileItem title='You' icon={<YouIcon />} slug='feed/you' />
          <MenuMobileItem title='History' icon={<HistoryIcon />} slug='feed/history' />
        </section>
      }
    </>
  )
}

export default Sidebar
