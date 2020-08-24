import { data } from './data/databases'

export const comprobation = (current) => {
  let elem = data.filter(a => a.id === current)
  return elem[0]
}