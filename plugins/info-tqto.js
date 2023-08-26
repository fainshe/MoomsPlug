// Thanks For Xyroinee
// Scrip By Im-Dims
// Jangan Di Hapus Mas :)

import fetch from 'node-fetch'

let handler = async (m) => {
    let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
    let wibu = `https://telegra.ph/file/ada8adbdd869181b225af.jpg`
    let res = await fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/anime/neko.txt')
    let txt = await res.text()
    let arr = txt.split('\n')
    let zeen = arr[Math.floor(Math.random() * arr.length)]
    let thumb = await(await fetch(zeen)).buffer()
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
let tqto = `*———— 「 Thanks To 」 ————*
	
• Adiwajshing :
https://github.com/adiwajshing

• Nurutomo :
https://github.com/Nurutomo

• BochilGaming :
https://github.com/BochilGaming

• ShirokamiRyzen :
https://github.com/ShirokamiRyzen

• ImYanXiao :
https://github.com/ImYanXiao

• Ekuzika :
http://github.com/Rmdhn-20

• David :
https://github.com/xct007

• Dims :
https://github.com/Im-Dims

• Danil :
https://github.com/Xyroinee

Dan Semua Yang Berkontribusi 
Dalam Pengambangan Script Ini`
conn.sendMessage(m.chat, {
      text: tqto,
      contextInfo: {
      externalAdReply: {
      title: `Euphyllia - Multidevice`,
      body: global.author,
      thumbnailUrl: wibu,
      sourceUrl: `${sgc}`,
      mediaType: 1,
      renderLargerThumbnail: true
      }}})
//conn.sendFile(m.chat, wibu, 'tqto.jpg', `${tqto}`, m)
}
handler.help = ['tqto']
handler.tags = ['main']
handler.command = /^(credits|credit|thanks|thanksto|tqto)$/i
export default handler