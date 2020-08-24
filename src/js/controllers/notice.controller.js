import stickybits from 'stickybits'
import { createCard } from '../constructor'


export const Notice = (content) => {
  document.body.innerHTML = require(`../../pages/notice.pug`)
  stickybits(document.querySelector('.main-container-wrapper2'), { stickyBitStickyOffset: 50 })
  let notice = document.getElementById('notice')
  notice.classList.add('notice')
  notice.querySelector('.notice__cover').src = content.cover
  notice.querySelector('.notice__title').textContent = content.title
  notice.querySelector('.notice__author').textContent = content.autor
  notice.querySelector('.notice__content').innerHTML = content.content
  /* let other = container.querySelector('.main-content__subtitle')
  createCard(document, father, content)
  container.querySelector(father).insertBefore(notice, other) */
}