import stickybits from 'stickybits'
import { createCard, createThumb } from '../constructor'
import { random } from '../random'
import { data } from '../data/databases'

export const Home = () => {
  sessionStorage.removeItem('notices')
  document.body.innerHTML = require(`../../pages/index.pug`)
  stickybits(document.querySelector('.main-container-wrapper'), { stickyBitStickyOffset: 50 })
  createThumb(document, '.main-news', data[random(data.length, data.length - 1)], 'big')
  createThumb(document, '.main-news', data[random(data.length)])
  createThumb(document, '.main-news', data[random(data.length)])
  createThumb(document, '.main-news', data[random(data.length)])
  createThumb(document, '.main-news', data[random(data.length)])
  createCard(document, '.main-content__last-news', data[random(data.length)])
  createCard(document, '.main-content__last-news', data[random(data.length)])
  createCard(document, '.main-content__last-news', data[random(data.length)])
  createCard(document, '.main-content__last-news', data[random(data.length)])
  createCard(document, '.main-content__last-news', data[random(data.length)])
  createCard(document, '.main-content__last-news', data[random(data.length)])
  createCard(document, '.main-content__last-news', data[random(data.length)])
  ScrollReveal().reveal('.main-news__notice-content', { delay: "200", distance: "5em", origin: "bottom" })
  ScrollReveal().reveal('.notice-card', { delay: "200", distance: "5em", origin: "bottom" })
  ScrollReveal().reveal('a.main-content__social-link', { delay: "200", distance: "5em", origin: "top" })
  const elements = document.querySelectorAll('[class*="notice"]')
  elements.forEach(e => e.addEventListener('click', () => {
    console.log(elements)
    window.location.hash = `#/notice`
    sessionStorage.setItem('current', e.id)
  }))
}