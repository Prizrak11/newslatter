window.addEventListener('hashchange', () => {
  const reload = (url) => {
    document.body.innerHTML = require(`../pages/${url}.pug`)
  }
  var notice;
  document.body.innerHTML = ' '
  switch (window.location.hash) {
    case '#/':
      reload('index')
      const elements = document.querySelectorAll('[class*="notice"].imp')
      elements.forEach(e => e.addEventListener('click', () => {
        window.location.hash = `#/notice`
        notice = e
        console.log(notice)
      }))
      break;
    case '#/notice':
      reload('notice')
      break
    default:
      reload('404')
      break
  }
})