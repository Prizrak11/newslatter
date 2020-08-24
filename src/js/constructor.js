const createCard = (doc, father, content) => {
  let card = doc.createElement('div')
  card.classList.add('notice-card')
  card.classList.add('imp')
  card.classList.add('hvr-grow')
  card.id = content.id
  card.innerHTML = require(`./components/notice-card.pug`)
  card.querySelector('.notice-card__img').src = content.cover
  card.querySelector('.notice-card__title').textContent = content.title
  card.querySelector('.notice-card__desc').textContent = content.desc
  card.querySelector('.notice-card__author').textContent = content.autor
  let container = doc.querySelector('#container')
  container.querySelector(father).appendChild(card)
}
const createThumb = (doc, father, content, type) => {
  let thumb = doc.createElement('div')
  thumb.classList.add('main-news__notice')
  thumb.classList.add('imp')
  thumb.classList.add('hvr-grow')
  thumb.style = `background-image: url(${content.cover})`
  thumb.id = content.id
  thumb.innerHTML = require('./components/notice-thumb.pug')
  if (type == 'big') {
    thumb.classList.add('big')
    thumb.querySelector('.main-news__notice-content').classList.add('big')
  }
  thumb.querySelector('.main-news__notice-title').textContent = content.title
  thumb.querySelector('.main-news__notice-desc').textContent = content.desc
  let container = doc.querySelector('#container')
  let container2 = container.querySelector(father)
  container2.querySelector('.main-news__container').appendChild(thumb)
}
export { createCard, createThumb }