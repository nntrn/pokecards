export function toJadenCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase())
}

export function capitalize(string) {
  return string.replace(/\b[a-z]/g, function (e) {
    return e.toUpperCase()
  })
}
