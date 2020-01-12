const fs = require('fs')
const toIco = require('to-ico')

const files = []

fs.readdirSync('public/')
  .filter(e => /^siteicon.*\.png$/.test(e))
  .forEach(e => {
    const blocks = fs.statSync(`public/${e}`).blocks
    if (blocks % 8 === 0 && blocks <= 32) {
      files.push(fs.readFileSync(`public/${e}`))
    }
  })

toIco(files).then(buf => {
  fs.writeFileSync('public/favicon.ico', buf)
})
