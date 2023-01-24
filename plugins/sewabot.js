let handler = async (m, { conn }) => {
	//-----PRICE
//sewa
let sh = '5'
let sn = '15'
let ss = '30'
let sp = '35'
let sv = '65'
let info = `
▣ ┅ ⟨ *Price* ⟩
┊◈ *Hemat:* _${sh}k/grup (1 minggu)_
┊◈ *Normal:* _${sn}k/grup (1 bulan)_
┊◈ *Standar:* _${ss}k/grup (2 bulan)_
┊◈ *Pro:* _${sp}k/grup (4 bulan)_                                                      
┊◈ *Vip:* = _${sv}k/grup (12 bulan)_
╰╗
╭╩━━━「 *Payment* 」
┊◇ *Pulsa:* [${ppulsa}]
┊◇ *Dana:* [${pdana}]
┊◇ *Gopay:* [${pgopay}]         
╰═╼ ╾ ◈

▌│█║▌║▌║║▌║▌║█│▌
`
const sections = [
   {
	title: `${htjava} SEWA ✦-------`,
	rows: [
	    {title: "HEMAT", rowId: '.yushinoorder *Paket:* HEMAT • Sewa', description: 'PRICE: ' + sh + 'k (1 minggu)' },
	    {title: "NORMAL", rowId: '.yushinoorder *Paket:* NORMAL • Sewa', description: 'PRICE: ' + sn + 'k (1 bulan)' },
	{title: "STANDAR", rowId: '.yushinoorder *Paket:* STANDAR • Sewa', description: 'PRICE: ' + ss + 'k (2 bulan)' },
	{title: "PRO", rowId: '.yushinoorder *Paket:* PRO • Sewa', description: 'PRICE: ' + sp + 'k (4 bulan)' },
	{title: "VIP", rowId: '.yushinoorder *Paket:* VIP • Sewa', description: 'PRICE: ' + sv + 'k (12 bulan)' },
	]
    },
]

const listMessage = {
  text: info,
  footer: botdate,
  title: wm,
  buttonText: "Click Here!",
  sections
}
await conn.sendMessage(m.chat, listMessage)
}

handler.help = ['sewa', 'premium']
handler.tags = ['main']
handler.command = /^(sewa(bot|yushino)?|premium)$/i

export default handler
