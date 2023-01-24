/*
import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, text }) => {
    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
    let stiker = await sticker(null, global.API('xteam', '/ttp', { file: '', text: teks }), global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
}
handler.help = ['ttp <teks>']
handler.tags = ['sticker']

handler.command = /^ttp$/i
export default handler
*/
import { sticker } from '../lib/sticker.js'
import fetch from 'node-fetch'

let handler = async (m, { 
conn, 
text, 
command 
}) => {
 if (!text) throw `*CONTOH*\n${usedPrefix + command} Bot`
    let teks = encodeURI(text)
    if (command == 'ttp') {
    conn.sendFile(m.chat, `https://api.tiodevhost.my.id/api/maker/ttp?text=${teks}`, 'sticker.webp', '', m, { asSticker: true })}
  }

handler.help = ['ttp <teks>']
handler.tags = ['sticker']

handler.command = /^ttp$/i

export default handler