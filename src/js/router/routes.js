import { comprobation } from '../comprobation'
import { Home } from '../controllers/index.controller'
import { Notice } from '../controllers/notice.controller'
import { Errors } from '../controllers/404.controller'
import { Images } from '../controllers/images.controller'
import { Sections } from '../controllers/section.controller'

export const router = (route) => {
  document.body.innerHTML = ' '
  window.scrollTo(0, 0);
  switch (route) {
    case '#/':
      Home()
      break
    case '#/notice':
      Notice(comprobation(sessionStorage.getItem('current')))
      break
    case '#/imagenes':
      Images()
      break
    case '#/ingles':
      Sections('ingles')
      break
    case '#/entretenimiento':
      Sections('entretenimiento')
      break
    case '#/historia':
      Sections('historia')
      break
    case '#/extra':
      Sections('extra')
      break
    default:
      Errors()
      break
  }
}