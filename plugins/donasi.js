let { generateWAMessageFromContent, prepareWAMessageMedia, proto } = (await import('@adiwajshing/baileys')).default
import moment from 'moment-timezone'
import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, { conn, args, usedPrefix, command }) => {
const messa = await prepareWAMessageMedia({ image: fs.readFileSync('./media/qr.png') }, { upload: conn.waUploadToServer })
const catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage, 
"productId": "5183720695067311",
"title": `SEWA&DONASI`,
"description": `HALO BANG`,
"currencyCode": "RM",
"bodyText": wm,
"footerText": wm,
"priceAmount1000": "3000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "10000000",
"retailerId": wm,
"url": "http://wa.me/60189830350"
},
"businessOwnerJid": "60189830350@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: ftroli })    

conn.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
}
handler.tags = ['main']
handler.command = /^(donasi1)$/i

handler.limit = true

export default handler
