export const Images = () => {
  document.body.innerHTML = require('../../pages/images.pug')
  ScrollReveal().reveal('img.hvr-bg-glow', { delay: "200", distance: "5em", origin: "bottom" })
}