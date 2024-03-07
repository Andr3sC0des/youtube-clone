import { useEffect, useState } from 'react'
import styles from './ImageSkeleton.module.sass'

const ImageSkeleton = ({
  id = 'skeleton-1',
  width = '300px',
  height = '200px',
  aspectRatio = '16/9',
  alt = 'An image with skeleton',
  src = 'https://i.ytimg.com/vi_webp/HMluqSGag5E/maxresdefault.webp',
  customStyle = {}
}) => {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setIsLoading(true)
    const img = new Image() // eslint-disable-line
    const image = document.querySelector(`#${id}`)
    const addImage = () => {
      image.src = src
      setIsLoading(false)
    }

    img.addEventListener('load', addImage)
    img.src = src

    return () => {
      img.removeEventListener('load', addImage)
    }
  }, [src])

  return (
    <>
      <picture
        style={{ width: !width ? '100%' : width, height: !height ? 'auto' : height, ...customStyle }}
        className={styles.picture}
      >
        <div
          style={{ display: isLoading ? 'block' : 'none', aspectRatio }}
          className={styles.skeleton}
        />
        <img
          id={id}
          className={styles.image}
          style={{ display: isLoading ? 'none' : 'block' }}
          src={src}
          alt={alt}
        />

      </picture>
    </>
  )
}

export default ImageSkeleton
