export default function buttonTop () {
  const button = document.querySelector('.button-top')

  window.addEventListener('scroll', () => {

    if (button) button.style.visibility = window.scrollY > 600 ? 'visible' : 'hidden'

  })

  button?.addEventListener('click', () => {
    window.scrollTo({
      behavior: 'smooth',
      top: 0
    })
  })
}
