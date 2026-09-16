import 'bootstrap-icons/font/bootstrap-icons.css'
import '../sass/main.sass'

import { initFormAfiliado } from './form'
import buttonTop from './buttonTop'
import buttonAfiliacao from './buttonAfiliacao'

document.addEventListener('DOMContentLoaded', () => {
  buttonTop()
  initFormAfiliado()
  buttonAfiliacao()
})
