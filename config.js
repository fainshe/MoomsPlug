// Script Ori By Xyroinee
// Ditulis ulang oleh Im-Dims??
// Credits, jangan dihapus atau diubah!

// - - Thanks To - -
// • Allah Swt
// • Wh Mods Dev
// • Xyroinee
// • Creator Rest Api
// • Dll

// [!] jangan lupa ganti ownernya

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

//----------- Owner -----------//
global.owner = [
['6285793887010', 'Dims', true],
]
global.mods = []
global.prems = []
//----------- Info -----------//
global.nomorwa = '6285793887010'
global.packname = 'Mooms Multidevice By'
global.author = '© Dims'
global.namebot = '​Mooms - Multidevice'
global.wm = '© Mooms By Dims'
global.stickpack = 'Mooms By'
global.stickauth = '© Dims'
//----------- Link Sosial Media -----------//
global.sig = 'https://www.instagram.com/' //instagram
global.sgh = 'https://github.com/fainshe' //github
global.sgc = 'https://chat.whatsapp.com/CHVe6nOEBcw1aRamTnHQ4q' //group whatsapp
global.sdc = '-' //discord
global.snh = 'https://www.youtube.com/@fainshe' //youtube
//----------- Pay -----------//
global.psaweria = 'https://saweria.co/Zeltoria'
global.ptrakterr = 'https://trakteer.id/feesu'
global.povo = '6285793887010'
//----------- Sistem -----------//
global.wait = '_Sedang Di Proses, Mohon Tunggu_....'
global.eror = 'Terjadi Kesalahan Coba Lagi Nanti!'
global.multiplier = 69 
//----------- Gambar -----------//
global.fotonya = 'https://telegra.ph/file/771ec1b185f02be1e573e.jpg' // Gambar menu
global.gambarnya = 'https://telegra.ph/file/7dff62656e734888dccad.jpg' 
global.well = 'https://telegra.ph/file/ef4b742d47e6a9115e2ff.jpg'

// Untuk apikey biarin aja pake ini aja kalau fitur error beli apikeynya jangan cuma nyolong aja:v
//----------- Apikey -----------//
global.dims = 'dimsanu', // Milik im-Dims??
global.xyro = 'Apilu ya anj', // https://api.xyroinee.xyz/
global.wibu = 'Apilu ya anj', // https://api.zahwazein.xyz/
global.keysxteam = '29d4b59a4aa687ca',
global.keysneoxr = '5VC9rvNx',
global.lolkey = 'GataDios', // Expired Agustus 2023
global.caliph = 'Lwlct6wi',
global.rose = '4b146102c4d500809da9d1ff',
global.xcoders = 'Frieren',
global.ibeng = 'tamvan',
global.botcahx = 'Admin',
global.fgmods = 'fg-dylux',
global.org = 'org-VKTbfzIGL0EfLb8RgRfbLvbu', //openAI Organization name
global.deepai = 'quickstart-QUdJIGlzIGNvbWluZy4uLi4K', // https://deepai.org
global.uptime = '' // Masukin apikey uptimerobot kamu disini // https://uptimerobot.com/dashboard?ref=website-header#mySettings

global.APIs = {
  xteam: 'https://api.xteam.xyz',
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://api.zahwazein.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  fgmods: 'https://api-fgmods.ddns.net',
  botcahx: 'https://api.botcahx.biz.id',
  ibeng: 'https://api.ibeng.tech/docs',
  rose: 'https://api.itsrose.site',
  popcat: 'https://api.popcat.xyz',
  xcoders: 'https://api-xcoders.site'

},
global.APIKeys = {
  'https://api.xteam.xyz': `${keysxteam}`,
  'https://api.lolhuman.xyz': `${lolkey}`,
  'https://api.neoxr.my.id': `${keysneoxr}`,
  'https://api.zahwazein.xyz': `${wibu}`,
  'https://api-fgmods.ddns.net': `${fgmods}`,
  'https://api.botcahx.biz.id': `${botcahx}`,
  'https://api.ibeng.tech/docs': `${ibeng}`,
  'https://api.itsrose.site': `${rose}`,
  'https://api-xcoders.site': `${xcoders}`
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
