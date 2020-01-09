export function calculateHP(base = 25, level = 100, EV = 0, IV = 31) {
  base = parseInt(base)
  level = parseInt(level)
  EV = parseInt(EV)
  IV = parseInt(IV)
  return parseInt(((base * 2 + IV + EV / 4) * level) / 100 + 10 + level)
}

export function calculateStat(base = 25, level = 100, nmod = 1, EV = 0, IV = 31) {
  base = parseInt(base)
  level = parseInt(level)
  EV = parseInt(EV)
  IV = parseInt(IV)
  nmod = parseFloat(nmod)
  return parseInt((((base * 2 + IV + EV / 4) * level) / 100 + 5) * nmod)
}
