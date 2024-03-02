import styles from './Button.module.sass'

// types: button, menu, popup, sign-in
const Button = ({ children = 'Button', type = 'button', onClick }) => {
  const buttonStyles = () => {
    if (type === 'menu') return [styles.button, styles.menu].join(' ')
    if (type === 'popup') return [styles.button, styles.popup].join(' ')
    if (type === 'sign-in') return [styles.button, styles.signin].join(' ')
    if (type === 'button') return styles.button
  }

  return (
    <>
      <button onClick={onClick} className={buttonStyles()}>{children}</button>
    </>
  )
}

export default Button
