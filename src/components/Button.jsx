import styles from './Button.module.sass'

// types: button, menu, popup, sign-in
const Button = ({ children = 'Button', type = 'button', onClick, customStyle = {}, color, buttonRef }) => {
  const buttonStyles = () => {
    if (type === 'menu') return [styles.button, styles.menu].join(' ')
    if (type === 'popup') return [styles.button, styles.popup].join(' ')
    if (type === 'sign-in') return [styles.button, styles.signin].join(' ')
    if (type === 'action') return [styles.button, styles.action].join(' ')
    if (type === 'double') return [styles.button, styles.double].join(' ')
    if (color === 'white') return [styles.button, styles.white].join(' ')
    if (type === 'short') return [styles.button, styles.short].join(' ')
    if (type === 'button') return styles.button
  }

  if (type === 'double') {
    return (
      <div className={buttonStyles()}>
        {children}
      </div>
    )
  }
  if (type === 'menu') {
    return (
      <button
        ref={buttonRef}
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
