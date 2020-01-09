export function randomNum(min, max) {
  return min + Math.floor(Math.random() * (max + 1 - min))
}

export function randomId(size = 100, bit = 16) {
  bit = bit > 1 && bit < 37 ? bit : 16
  return Math.floor(0x100000000 + Math.random() * 0xf00000000)
    .toString(bit)
    .substr(0, size)
}
