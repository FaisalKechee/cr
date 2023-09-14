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

let handler = async (m, { conn, usedPrefix, command, text, participants }) => {
  if (!text) throw `Masukan teks ${usedPrefix + command}text\nexample : ${usedPrefix + command}assalamualaikum save Zyko MD`
  let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)  
  if (mem.length == 0) return conn.reply(m.chat, 'Tidak ada anggota yang ditemukan', m)  
  let chatIds = mem.map(v => v.replace(/@.+/, ''))  
  for (let chatId of chatIds) {
    conn.sendMessage(chatId + '@s.whatsapp.net', {
      text: text.trim()
    })
  }  
  conn.reply(m.chat, 'Sukses Push Kontak', m)
}
handler.help = ['pushkontak', 'pk'].map(v => v + ' <teks> ')
handler.tags = ['pushkontak']
handler.command = /^(pushkontak|pk)$/i
handler.owner = true
handler.group = true

export default handler
