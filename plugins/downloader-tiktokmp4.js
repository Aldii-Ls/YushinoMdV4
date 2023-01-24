//APIKEY
import fetch from 'node-fetch'
import axios from 'axios'
let handler = async (m, { conn, args, text, command, usedPrefix }) => {
let tag = `@${m.sender.replace(/@.+/, '')}`
  let mentionedJid = conn.parseMention(tag)
  if (!args[0]) throw `Gunakan format: ${usedPrefix}${command} https://tiktok.com/xxxx`
try {
let res = await fetch(`https://saipulanuar.ga/api/download/tiktok?url=${args[0]}`)
let data = await res.json()
let json = data.result

let view = await fetch(`https://saipulanuar.ga/api/download/tiktokview?url=${args[0]}`)
let don = await view.json()
let jsoon = don.result
let done = `▣\n┆➵ Author : ${jsoon.author}\n┆➵ Play : ${jsoon.playCount}\n┆➵ Publish : ${jsoon.createdAt}\n┆➵ Likes : ${jsoon.likesCount}\n┆➵ Command : ${jsoon.commentCount}\n┆➵ Shares : ${jsoon.shareCount}\n⟡ ━━┄┄┄┈┈┈\nDescription:\n${jsoon.description}`
conn.reply(m.chat, 'Proses', m)
await conn.sendHydrated2(m.chat, `Done` + ' ' + tag, done, json.video, 'https://instagram.com/al.0fficial_/', 'ɪ ɴ s ᴛ ᴀ ɢ ʀ ᴀ ᴍ', 'https://youtube.com/@aldiganzoffc', 'ʏ ᴏ ᴜ ᴛ ᴜ ʙ ᴇ', [['Donasi', `.donasi`],
  ['Audio', `.tikaudio ${args[0]}`]], m)
} catch (e) {
conn.reply(m.chat, 'Tidak dapat mengambil url', m)
throw e
}
} 
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(ttdl|tiktok|tiktokdl|tiktokdownload|tt|tiktokvid|ttvid)$/i

export default handler

//SCRAPER
/*import fetch from 'node-fetch'
let handler = async (m, { conn, args, command, usedPrefix }) => {
  if (!args[0]) throw `Gunakan format: ${usedPrefix}${command} https://tiktokxxxx`
  let { video, description, music, author } = await tiktok(args[0])
  let url = video.no_watermark || video.with_watermark || video.no_watermark_raw || music
  if (!url) throw 'Gagal mengambil url download'
  await conn.sendFile(m.chat, url, 'tiktok.mp4', `
- *By:* ${author.nickname} (${author.unique_id})
- *Desc:*
${description}
`.trim(), m)
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(tik(tok)?(dl)?)$/i

export default handler

import axios from 'axios'
async function tiktok(url) {
  try {
    let results = {}
    if (/v[tm]\.tiktok\.com/g.test(url)) {
      let res = await axios.get(url)
      url = res.request.res.responseUrl
    }
    let key = await axios.get(`https://api.snaptik.site/video-key?video_url=${url}`)
    key = JSON.parse(JSON.stringify(key.data, null, 2))
    if (key.status !== 'success') throw key
    let data = await axios.get(`https://api.snaptik.site/video-details-by-key?key=${key.data.key}`)
    data = JSON.parse(JSON.stringify(data.data, null, 2))
    if (data.status !== 'success') throw data
    results = {
      author: { ...data.data.author },
      description: data.data.description,
      video: {
        with_watermark: `https://api.snaptik.site/download?key=${data.data.video.with_watermark}&type=video`,
        no_watermark: `https://api.snaptik.site/download?key=${data.data.video.no_watermark}&type=video`,
        no_watermark_raw: data.data.video.no_watermark_raw
      },
      music: `https://api.snaptik.site/download?key=${data.data.music}&type=music`
    }
    return results
  } catch (e) {
    throw 'Maybe video private?!'
  }
}*/

//BOCHIL TEAM
/*import { tiktokdl, tiktokdlv2, tiktokdlv3 } from '@bochilteam/scraper'
import fs from'fs'
let handler = async (m, { conn, args, usedPrefix, command }) => {
try {
if (!args[0]) throw '\nSertakan link tiktoknya kak !\n\nContoh: .tiktok https://vt.tiktok.com/ZSRy13T78/'
    m.reply('Prosess...')
    const { author: { nickname }, video, description } = await tiktokdl(args[0]).catch(async _ => await tiktokdlv2(args[0])).catch(async _ => await tiktokdlv3(args[0]))
    const url = video.no_watermark || video.no_watermark2 || video.no_watermark_raw
    let done = `▣\n┆➵ Author : ${nickname}\n⟡ ━━┄┄┄┈┈┈\nDescription:\n` + description
    if (!url) throw 'Tidak dapat mengunduh video!'
conn.sendHydrated2(m.chat, `Done @${m.sender.split(`@`)[0]}`, done, url, 'https://instagram.com/al.0fficial_/', 'ɪ ɴ s ᴛ ᴀ ɢ ʀ ᴀ ᴍ', 'https://youtube.com/@aldiganzoffc', 'ʏ ᴏ ᴜ ᴛ ᴜ ʙ ᴇ', [['Donasi', `.donasi`], ['Audio', `.tikaudio ${args[0]}`]], m)
} catch (e) {
m.reply('Maaf fitur error, coba lagi beberapa saat')
throw e
}
}
handler.help = ['tiktok']
handler.tags = ['downloader']
handler.command = ['tt', 'tiktok', 'tiktokdl', 'ttdl']

export default handler*/

