import stickybits from 'stickybits'
import { createCard, createThumb } from '../constructor'
import { data } from '../data/databases'

export const Sections = (type) => {
  document.body.innerHTML = require('../../pages/section.pug')
  document.querySelector('.main-content__subtitle').textContent = `Noticias de ${type}`
  stickybits(document.querySelector('.main-container-wrapper'), { stickyBitStickyOffset: 50 })
  for (let e of data) {
    e.type.indexOf(type) !== -1 ?
      createCard(document, '.main-content__last-news', e) :
      null
  }
  ScrollReveal().reveal('.notice-card', { delay: "200", distance: "5em", origin: "bottom" })
  ScrollReveal().reveal('a.main-content__social-link', { delay: "200", distance: "5em", origin: "top" })
  const elements = document.querySelectorAll('[class*="notice"].imp')
  elements.forEach(e => e.addEventListener('click', () => {
    window.location.hash = `#/notice`
    sessionStorage.setItem('current', e.id)
  }))
}