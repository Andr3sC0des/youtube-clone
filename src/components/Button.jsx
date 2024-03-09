import styles from './Button.module.sass'

// types: button, menu, popup, sign-in
const Button = ({ children = 'Button', type = 'button', onClick, customStyle = {}, color, reference, customClass, label = 'Button' }) => {
  const buttonStyles = () => {
    if (type === 'menu') return [styles.button, styles.menu, customClass].join(' ')
    if (type === 'popup') return [styles.button, styles.popup, customClass].join(' ')
    if (type === 'sign-in') return [styles.button, styles.signin, customClass].join(' ')
    if (type === 'action') return [styles.button, styles.action, customClass].join(' ')
    if (type === 'double') return [styles.button, styles.double, customClass].join(' ')
    if (color === 'white') return [styles.button, styles.white, customClass].join(' ')
    if (type === 'short') return [styles.button, styles.short, customClass].join(' ')
    if (type === 'shorticon') return [styles.button, styles.shorticon, customClass].join(' ')
    if (type === 'button') return [styles.button, customClass].join(' ')
  }

  if (type === 'double') {
    return (
      <div className={buttonStyles()}>
        {children}
      </div>
    )
  }
  if (type === 'menu' || type === 'popup') {
    return (
      <button
        aria-label={label}
        ref={reference}
        onClick={onClick}
        className={buttonStyles()}
      >{children}
      </button>
    )
  }

  return (
    <>
      <button
        style={customStyle}
        onClick={onClick}
        className={buttonStyles()}
      >{children}
      </button>
    </>
  )
}

export default Button
