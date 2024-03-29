import styles from './ProfileInfo.module.sass'

const ProfileInfo = () => {
  return (
    <>
      <div className={styles.profile}>
        <img className={styles.avatar} src='https://unavatar.io/github/andr3sc0des' alt='YouTube Avatar Account' />
        <div className={styles.info}>
          <span>Username</span>
          <span>@Username</span>
          <a className={styles.channel} href='/channel'>View your channel</a>
        </div>
      </div>
    </>
  )
}

export default ProfileInfo
