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
if (!text) return m.reply(`🚩 Enter the group id and text in the correct format, for Example: ${usedPrefix+command} reply image/photo 1234567890@g.us|assalamualaikum save Zyko MD`)
  let [groupAndText, pushText] = text.split('|');
  if (!groupAndText || !pushText) throw `Enter the group id and text in the correct format, for Example: ${usedPrefix + command} idgc|assalamualaikum save Zyko MD`;

  let groupId = groupAndText.split(' ')[0];
m.reply('🚩 Currently pushing contact please wait')
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
let media = await q.download()
let url = await uploadImage(media)  
const metadata2 = await conn.groupMetadata(groupId)
const halss = metadata2.participants
for (let mem of halss) {
conn.sendMessage(`${mem.id.split('@')[0]}` + "@s.whatsapp.net", {
image: {
url: url
},
caption: pushText
});
await new Promise(resolve => setTimeout(resolve, 3000)); // jeda selama 3 detik
  }  
  conn.reply(m.chat, '🚩 Success Push Contacts', m)
}
handler.help = ['pushkontakv4', 'pkv4'].map(v => v + ' <idgroup>|<teks> ')
handler.tags = ['pushkontak']
handler.command = /^(pushkontakgambargc|pkgambgc)$/i
handler.owner = true
export default handler
