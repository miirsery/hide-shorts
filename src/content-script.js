window.addEventListener('load', () => {
  const items = document.querySelectorAll('.ytd-guide-section-renderer')

  const locaiton = window.location
  const isShortsPage = locaiton.href.includes('shorts')

  if (items) {
    Array.from(items).forEach((item) => {
      const child = item.querySelector('.ytd-guide-entry-renderer')

      if (child) {
        if (child.hasAttribute('title') && child.getAttribute('title') === 'Shorts') {
            item.remove()
        }
      }
    })
  }

  if (isShortsPage) {
    locaiton.replace('https://www.youtube.com')
  }
})