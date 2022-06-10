let mainContent = null
let mobileMenu = null

setInterval(() => {
  if (mobileMenu) {
    if (mobileMenu.classList.contains('visible')) {
      return (
        (document.documentElement.style.pointerEvents = 'none'),
        (document.documentElement.style.touchAction = 'none'),
        (document.documentElement.style.overflow = 'hidden'),
        (mainContent.style.pointerEvents = 'all')
      )
    } else {
      return (
        (document.documentElement.style.pointerEvents = 'all'),
        (document.documentElement.style.touchAction = 'auto'),
        (document.documentElement.style.overflow = 'auto'),
        (mainContent.style.pointerEvents = 'all')
      )
    }
  }
  return (
    (mainContent = document.querySelector('.main-content')),
    (mobileMenu = document.querySelector('.mobile-menu'))
  )
})
document.addEventListener('DOMContentLoaded', function () {
  window.setTimeout(
    document.querySelector('#freepik_stories-law-firm').classList.add('animated'),
    1000
  )
  window.setTimeout(
    document.querySelector('#freepik_stories-fill-out').classList.add('animated'),
    1000
  )
})
