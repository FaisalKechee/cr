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

let handler = async (m, { conn, command, usedPrefix, text, participants }) => {
if (!text) return m.reply(`🚩 Enter the group id and text in the correct format, for Example: ${usedPrefix+command}1234567890@g.us|assalamualaikum save Zyko MD\n\nCara Ambil idgroup nya gunakan Text .cekidgc`)
let [groupId, pushText] = text.split('|') //text.split("|")[0]
if (!groupId || !pushText) throw `🚩 Enter the group id and text in the correct format, for Example: ${usedPrefix+command}1234567890@g.us|assalamualaikum save Zyko MD\n\nCara Ambil idgroup nya gunakan Text .cekidgc`
m.reply('🚩 Currently pushing contact please wait')
const metadata2 = await conn.groupMetadata(groupId)
const halss = metadata2.participants
for (let mem of halss) {
conn.sendMessage(`${mem.id.split('@')[0]}` + "@s.whatsapp.net", { text: text.split("|")[1] })
  }  
  conn.reply(m.chat, '🚩 Success Push Contacts', m)
}
handler.help = ['pushkontakv3', 'pkv3'].map(v => v + ' <idgroup>|<teks> ')
handler.tags = ['pushkontak']
handler.command = /^(pushkontakv3|pkv3)$/i
handler.owner = true
export default handler
