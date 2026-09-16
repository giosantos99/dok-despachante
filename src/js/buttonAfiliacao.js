export default function buttonAfiliacao () {
  const form = document.querySelector('.section-form')
  const button = document.querySelector('.btn-afiliar')

  button?.addEventListener('click', () => {
    form?.scrollIntoView({
      behavior: 'smooth'
    })
  })
}