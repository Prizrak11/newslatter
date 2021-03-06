import stickybits from 'stickybits'
import { createCard } from '../constructor'
import { random } from '../random'
import { data } from '../data/databases'
const log = e => console.log(e)

export const Notice = (content) => {
  document.body.innerHTML = require(`../../pages/notice.pug`)
  stickybits(document.querySelector('.main-container-wrapper2'), { stickyBitStickyOffset: 50 })
  const notice = document.getElementById('notice')
  notice.classList.add('notice')
  notice.querySelector('.notice__cover').src = content.cover
  notice.querySelector('.notice__title').textContent = content.title
  notice.querySelector('.notice__author').textContent = content.autor
  notice.querySelector('.notice__content').innerHTML = content.content
  sessionStorage.removeItem('notices')
  createCard(document, '.main-content__notice', data[random(data.length)])
  createCard(document, '.main-content__notice', data[random(data.length)])
  createCard(document, '.main-content__notice', data[random(data.length)])
  for (let name of content.type) {
    let actual = notice.querySelector('.notice__tags')
    let tag = document.createElement('li')
    tag.textContent = name
    tag.classList.add('notice__tag')
    tag.classList.add(name)
    actual.appendChild(tag)
  }
  const elements = document.querySelectorAll('[class*="notice"].imp')
  elements.forEach(e => e.addEventListener('click', () => {
    window.location.hash = `#/`
    window.location.hash = `#/notice`
    if (e.id != '') sessionStorage.setItem('current', e.id)
  }))
}