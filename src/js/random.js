let counter
export const random = (n, force) => {
  sessionStorage.getItem('notices') === null ?
    counter = [] :
    counter = Array.from(JSON.parse(sessionStorage.getItem('notices')))
  if (typeof force !== 'undefined') {
    counter.push(force)
    sessionStorage.setItem('notices', JSON.stringify(counter.filter(a => a != ',')))
    return force
  }
  let test = false
  if (counter.length !== n - 1) {
    let num = Math.floor(Math.random() * (n - 0) + 0)
    for (let i = 0; i < counter.length; i++) {
      if (counter[i] == num && counter[i] != force) {
        test = true
        break;
      }
    }
    if (!test) {
      counter.push(num)
      sessionStorage.setItem('notices', JSON.stringify(counter.filter(a => a != ',')))
      return num
    } else {
      return random(n)
    }
  } else {
    return null
  }
}