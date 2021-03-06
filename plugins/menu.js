const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let levelling = require('../lib/levelling')
let tags = {
  'rpgabsen': '๐ฅ๐ฃ๐-๐๐๐ฆ๐๐ก',
  'rpg': '๐ฅ๐ฃ๐',
  'game': '๐๐๐ ๐',
  'xp': '๐๐ซ๐ฃ-๐๐๐ ๐๐ง',
  'asupan': '๐๐ฆ๐จ๐ฃ๐๐ก',
  'sticker': '๐ฆ๐ง๐๐๐๐๐ฅ',
  'main': '๐ ๐๐๐ก',
  'kerang': '๐๐๐ฅ๐๐ก๐ ๐ ๐๐ก๐จ',
  'quotes': '๐ค๐จ๐ข๐ง๐๐ฆ',
  'group': '๐๐ฅ๐จ๐ฃ-๐ ๐๐ก๐จ',
  'internet': '๐๐ก๐ง๐๐ฅ๐ก๐๐ง',
  'anonymous': '๐๐ก๐ข๐ก๐ฌ๐ ๐ข๐จ๐ฆ',
  'downloader': '๐๐ข๐ช๐ก๐๐ข๐๐๐๐ฅ',
  'berita': '๐๐๐ฅ๐๐ง๐',
  'tools': '๐ง๐ข๐ข๐๐ฆ',
  'fun': '๐๐จ๐ก-๐ ๐๐ก๐จ',
  'anime': '๐๐ก๐๐ ๐ ๐ ๐๐ก๐จ',
  'database': '๐๐๐ง๐๐๐๐ฆ๐', 
  'vote': '๐ฉ๐ข๐ง๐๐ก๐-๐ ๐๐ก๐จ',
  'absen': '๐๐๐ฆ๐๐ก',
  'catatan': '๐๐๐ง๐๐ง๐๐ก',
  'jadian': '๐๐๐๐๐๐ก',
  'islami': '๐๐ฆ๐๐๐ ๐',
  'owner': '๐ข๐ช๐ก๐๐ฅ-๐ ๐๐ก๐จ',
  'advanced': '๐๐๐จ๐ฆ๐จ๐ฆ',
  'info': '๐๐ก๐๐ข',
  'audio': '๐๐จ๐๐๐ข',
  'maker': '๐ ๐๐๐๐ฅ',
}
const linkyt = `${ytlu}`
const linkig = `${instalu}`
const vtlah = `*โฒ${global.namabot}โณ*`
const anjg = `สแดษช,แดแดแด แดแดแดสแดส สแดแด สแดษดษข แดษชสแดสษช ษดแดแดแด ${global.namabot},แดแดแด แดษช แดแดแดสแดษดษขแดแดษด แดสแดส ๊ฑแด๊ฑแดแดสแดษดษข สแดษดษข สแดสษดแดแดแด ${global.ownername},สแดสษชแดแด แดแด๊ฑษชส แดแดแดแดสแด แดแดษด แดแด๊ฑษชส สแดสแดแดแดส สแดษดสแดแด สแดส,แดแดษด แดแดแดแดแดษดษดสแด สแดษดสแด ษชษดษขษชษด แดแดแด แดแดแด สแดษดษข ษชษดษขษชษด แดษชแดแดแดแดสแดษช แดษช แดแดษดษชแด สแดแด,\n๊ฑษชสแดสแดแดษด แดแดแดษชแด แดแดแดสแดส แดแดษดแด แดษดแดแดแด แดแดษดแดแดแดษชสแดแดษด แดแดษดแด สแดแด`
const defaultMenu = {
before: `
`.trimStart(),
  header: '${prefix}',
  body: '%date',
  footer: 'ownermenu',
  after: `${global.namabot}
*๐๐ซ๐จ๐ฃ๐๐๐ญ ๐ข๐ง๐ข ๐๐ข๐๐ฎ๐๐ญ ๐จ๐ฅ๐๐ก ${global.ownername}
${global.ownerinsta}
`,
}
let handler = async (m, { conn, usedPrefix: _p }) => {
  try {
let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = levelling.xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    const wib = moment.tz('Asia/Jakarta').format("HH:mm:ss")
    const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
    const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
let _uptime = process.uptime() * 1000
let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
let before = conn.menu.before || defaultMenu.before
let header = conn.menu.header || defaultMenu.header
let body = conn.menu.body || defaultMenu.body
let footer = conn.menu.footer || defaultMenu.footer
let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '(โ)' : '')
                .replace(/%isPremium/g, menu.premium ? '(โ)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.getName(conn.user.jid),
      ucapan: ucapan(),
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, name, weton, week, date, dateIslamic, wib, wit, wita, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
let url = `https://telegra.ph/file/01a5b3b1fc41ccaa284f8.png`
m.reply('_Tunggu Sebentar..._')
let res = await fetch(url)
let buffer = await res.buffer()
let message = await prepareWAMessageMedia({ image: buffer }, { upload: conn.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: vtlah.trim(),
                            hydratedFooterText: anjg.trim(),
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'YouTube',
                                    url: linkyt
                                }
                            }, {
                                urlButton: {
                                    displayText: 'INSTAGRAM',
                                    url: linkig
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'แฉใใ แฐแดแแ',
                                    id: '/allmenu'
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                conn.relayMessage(m.chat, template.message, { messageId: template.key.id })
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i

handler.exp = 3

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function ucapan() {
        const hour_now = moment.tz('Asia/Jakarta').format('HH')
        var ucapanWaktu = 'Pagi kak'
        if (hour_now >= '03' && hour_now <= '10') {
          ucapanWaktu = 'Pagi kak'
        } else if (hour_now >= '10' && hour_now <= '15') {
          ucapanWaktu = 'Siang kak'
        } else if (hour_now >= '15' && hour_now <= '17') {
          ucapanWaktu = 'Sore kak'
        } else if (hour_now >= '17' && hour_now <= '18') {
          ucapanWaktu = 'Selamat Petang kak'
        } else if (hour_now >= '18' && hour_now <= '23') {
          ucapanWaktu = 'Malam kak'
        } else {
          ucapanWaktu = 'Selamat Malam!'
        }	
        return ucapanWaktu
}
