/*
Di Buat : Zyko MD
©Zyko MD 2023

 * ig: @zzyko_04
 * yt: @zykobotz
 * tt: @zzyko_04

Jangan di hapus creatornya kack
Saya capek ngetik kode 

"Wahai orang-orang yang beriman, mengapakah kamu mengatakan sesuatu yang tidak kamu kerjakan?
Amat besar kebencian di sisi Allah bahwa kamu mengatakan apa-apa yang tidak kamu kerjakan."
(QS ash-Shaff: 2-3).
*/


import fetch from 'node-fetch'
import uploadImage from '../lib/uploadImage.js'
let handler = async (m, { conn, command, usedPrefix, text, participants }) => {
if (!text) throw `reply gambar Text`
m.reply('🚩 Currently pushing picture please wait')
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
let media = await q.download()
let url = await uploadImage(media)  
let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)  
if (mem.length == 0) return conn.reply(m.chat, 'Tidak ada anggota yang ditemukan', m)  
let chatIds = mem.map(v => v.replace(/@.+/, ''))  
for (let chatId of chatIds) {
conn.sendMessage(chatId + "@s.whatsapp.net", {
image: {
url: url
},
caption: text
});
await new Promise(resolve => setTimeout(resolve, 3000)); // jeda selama 3 detik
}  
conn.reply(m.chat, '🚩 Success Push picture', m)
}
handler.help = ['pushgambar', 'pkgambar'].map(v => v + ' <<teks> ')
handler.tags = ['pushkontak']
handler.command = /^(pushgambar|pkgambar)$/i
handler.owner = true
handler.group = true
export default handler