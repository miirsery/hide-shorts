window.addEventListener('load', () => {
  const items = document.querySelectorAll('.ytd-guide-section-renderer')

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
})