import fetch from 'node-fetch'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
//let handler = async(m, { conn, text, usedPrefix, command }) => {
//let pp = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image')

let str = `
_*DONASI BOTZ LYN*_
┌─「 Donasi • TopUp 」
│ • *Digi:* [${global.pdana}]
│ • *Maxis:* [${global.pgopay}]
│ • *Link Aja:* [${global.plinkaja}]
❏────`
let wibu = `https://telegra.ph/file/82f399cf9dd246029ad4a.jpg` 
let thumb = await(await fetch(wibu)).buffer()
conn.send3ButtonDoc(m.chat, str, botdate,'Sewa Bot','.sewa','donasi2','.donasi1','Menu','.menu', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "tautanwa",
    mediaType: "tautanwa",
    description: "https://www.instagram.com/p/CevoCg5hG-p/?utm_source=ig_web_copy_link", 
    title: 'SUBSCRIBE YT',
    body: bottime,
    thumbnail: thumb,
    sourceUrl: syt
  }
  } }) 
          }
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
