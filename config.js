let fs = require('fs')        
let chalk = require('chalk')
global.owner = [
  ['62895366943070'],
  ['62895373944100'],
  ['62895412590618', 'Elaina Cans', true]  
  
] 
global.ownername = [['𝑬𝑳𝑨𝑰𝑵𝑨 𝑪𝑨𝑵𝑻𝑰𝑲]]
global.namabot = [['𝑬𝑳𝑨𝑰𝑵𝑨 𝑫𝑨𝑵 𝑨𝑴𝑬𝑳𝑳']]
global.ownerinsta = [['@b4c00t.dtz']]
global.instalu = [['instagram.com/b4c00t.dtz']]
global.ytlu = [['https://youtube.com/channel/UCmEQy5B3GhmfNVSrHEzv-uA']]
global.mods = [] 
global.prems = ['62895366943070'] 

global.APIs = { 
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  bcil: 'https://75.119.137.248:21587',
  neoxr: 'https://api.neoxr.eu.org/',
  gimez: 'https://masgimenz.my.id/',
  melcanz: 'https://melcanz.com',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  restapi: 'https://x-restapi.herokuapp.com',
  alphabot: 'https://api-alphabot.herokuapp.com'
}
global.APIKeys = { 
  'https://api.xteam.xyz': '524e9d1f64f72f79',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.neoxr.eu.org/': '0fWgL9ID',
  'https://pencarikode.xyz': 'pais',
  'https://melcanz.com': 'ZZBk7EBb',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll',
  'https://x-restapi.herokuapp.com': 'BETA',
  'https://api-alphabot.herokuapp.com': 'N7axnIq3'
}

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0

const spack = fs.readFileSync("lib/exif.json")
const stickerpack = JSON.parse(spack)
if (stickerpack.spackname == '') {
  var sticker_name = '𝑬𝒍𝒂𝒊𝒏𝒂 𝑪𝒂𝒔𝒏'

'
  var sticker_author = '© 𝑬𝒍𝒂𝒊𝒏𝒂 𝒎𝒅'
} else {
  var sticker_name = stickerpack.spackname
  var sticker_author = stickerpack.sauthor
}

const file_exif = "lib/exif.json"
fs.watchFile(file_exif, () => {
  fs.unwatchFile(file_exif)
  console.log(chalk.redBright("Update 'exif.json'"))
  delete require.cache[file_exif]
  require('./lib/exif.json')
})

// Sticker WM
global.packname = '𝑬𝒍𝒂𝒊𝒏𝒂 𝑴𝑫'
global.author = '𝑬𝒍𝒂𝒊𝒏𝒂 𝑴𝑫'
global.wm = '© 𝑬𝑳𝑨𝑰𝑵𝑨 𝑪𝑨𝑵𝑻𝑰𝑲'

global.multiplier = 100

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      trash: '🗑',
      armor: '🥼',
      sword: '⚔️',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐎',
      cat: '🐈' ,
      dog: '🐕',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
