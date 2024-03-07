import debounce from 'just-debounce-it'

export class LiteYTEmbed extends window.HTMLElement {
  async connectedCallback () {
    this.videoId = this.getAttribute('videoid')
    this.activeButton = this.getAttribute('activebutton')
    this.isShort = this.getAttribute('isShort')
    this.autoplay = this.getAttribute('autoplay')

    let playBtnEl = this.querySelector('.lty-playbtn')

    this.playLabel =
      (playBtnEl && playBtnEl.textContent.trim()) ||
      this.getAttribute('playlabel') ||
      'Play'

    const isWebpSupported = await LiteYTEmbed.checkWebPSupport()

    this.posterUrl = isWebpSupported
      ? `https://i.ytimg.com/vi_webp/${this.videoId}/maxresdefault.webp`
      : `https://i.ytimg.com/vi/${this.videoId}/maxresdefault.jpg`

    LiteYTEmbed.addPrefetch('preload', this.posterUrl, 'image')
    this.style.backgroundImage = `url("${this.posterUrl}")`

    if (!playBtnEl) {
      playBtnEl = document.createElement('button')
      playBtnEl.type = 'button'
      playBtnEl.classList.add('lty-playbtn')
      if (!this.activeButton) {
        this.append(playBtnEl)
      }
    }
    if (!playBtnEl.textContent) {
      const playBtnLabelEl = document.createElement('span')
      playBtnLabelEl.className = 'lyt-visually-hidden'
      playBtnLabelEl.textContent = this.playLabel
      playBtnEl.append(playBtnLabelEl)
    }

    this.addEventListener('pointerover', LiteYTEmbed.warmConnections, {
      once: true
    })
    if (this.isShort) {
      this.addShort()
    }

    this.addEventListener('click', (e) => this.addIframe())
    if (this.activeButton) {
      const iframeEl = document.createElement('iframe')

      this.addEventListener('mouseenter', () => {
        const debouncedPlayVideo = debounce(() => {
          this.playVideo({ iframeEl })
        }, 1200)
        debouncedPlayVideo()
        this.addEventListener('mouseleave', debouncedPlayVideo.cancel)
      })
      this.addEventListener('mouseleave', () => {
        this.stopVideo({ iframeEl })
      })
    }
  }

  addShort () {
    const params = new URLSearchParams(this.getAttribute('params') || [])
    params.append('autoplay', this.autoplay ? '1' : '0')
    params.append('controls', '0')
    params.append('loop', '1')
    params.append('playlist', this.videoId)

    const iframeEl = document.createElement('iframe')
    iframeEl.width = 560
    iframeEl.height = 315
    iframeEl.title = this.playLabel
    iframeEl.allowFullscreen = false
    iframeEl.allow = 'accelerometer; autoplay; encrypted-media;'
    iframeEl.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(this.videoId)}?${params.toString()}`
    this.append(iframeEl)

    this.classList.add('lyt-activated')

    this.querySelector('iframe').focus()
  }

  playVideo ({ iframeEl }) {
    const params = new URLSearchParams(this.getAttribute('params') || [])
    params.append('autoplay', this.autoplay ? '1' : '0')
    params.append('mute', '1')
    params.append('controls', '0')

    iframeEl.width = 560
    iframeEl.height = 315
    iframeEl.title = this.playLabel
    iframeEl.allow =
      'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture '
    iframeEl.allowFullscreen = false
    iframeEl.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(
      this.videoId
    )}?${params.toString()}`
    this.append(iframeEl)

    this.classList.add('lyt-activated')

    this.querySelector('iframe').focus()
  }

  stopVideo ({ iframeEl }) {
    this.classList.remove('lyt-activated')
    iframeEl.remove()
  }

  static addPrefetch (kind, url, as) {
    const linkEl = document.createElement('link')
    linkEl.rel = kind
    linkEl.href = url
    if (as) {
      linkEl.as = as
    }
    document.head.append(linkEl)
  }

  static checkWebPSupport () {
    if (typeof LiteYTEmbed.hasWebPSupport !== 'undefined') {
      return Promise.resolve(LiteYTEmbed.hasWebPSupport)
    }

    return new Promise((resolve) => {
      const resolveAndSaveValue = (value) => {
        LiteYTEmbed.hasWebPSupport = value
        resolve(value)
      }

      const img = new window.Image()
      img.onload = () => resolveAndSaveValue(true)
      img.onerror = () => resolveAndSaveValue(false)
      img.src =
        'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA='
    })
  }

  static warmConnections () {
    if (LiteYTEmbed.preconnected) return

    LiteYTEmbed.addPrefetch('preconnect', 'https://www.youtube-nocookie.com')

    LiteYTEmbed.addPrefetch('preconnect', 'https://www.google.com')

    LiteYTEmbed.addPrefetch('preconnect', 'https://googleads.g.doubleclick.net')
    LiteYTEmbed.addPrefetch('preconnect', 'https://static.doubleclick.net')

    LiteYTEmbed.preconnected = true
  }

  addIframe () {
    const params = new URLSearchParams(this.getAttribute('params') || [])
    params.append('autoplay', this.autoplay ? '1' : '0')

    const iframeEl = document.createElement('iframe')

    iframeEl.width = 560
    iframeEl.height = 315
    iframeEl.title = this.playLabel
    iframeEl.allow =
      'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
    iframeEl.allowFullscreen = true
    iframeEl.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(
      this.videoId
    )}?${params.toString()}`
    this.append(iframeEl)

    this.classList.add('lyt-activated')

    this.querySelector('iframe').focus()
  }
}
window.customElements.define('lite-youtube', LiteYTEmbed)
