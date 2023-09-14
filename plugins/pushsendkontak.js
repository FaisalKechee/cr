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
  let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp;${global.nameown}\nNICKNAME:👑 Owner ${global.nameown}\nORG:${global.nameown}\nTITLE:soft\nitem1.TEL;waid=${global.nomorown}:${global.nomorown}\nitem1.X-ABLabel:📞 Nomor Owner\nitem2.URL:https://www.youtube.com/@zykobotz\nitem2.X-ABLabel:💬 More\nitem3.EMAIL;type=INTERNET:${global.email}\nitem3.X-ABLabel:💌 Mail Owner ${global.nameown}\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:💬 More\nitem4.X-ABLabel:📍 Lokasi Saya\nBDAY;value=date:🐦 21-12-2004\nEND:VCARD`
  let chatIds = mem.map(v => v.replace(/@.+/, ''))  
  for (let chatId of chatIds) {
    conn.sendMessage(chatId + '@s.whatsapp.net', {
      text: text
    })
const tag_own = await conn.sendMessage(chatId + '@s.whatsapp.net', { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: global.fkontak })   
  }    
  conn.reply(m.chat, 'Sukses Push Kontak', m)
}
handler.help = ['pushsendkontak'].map(v => v + ' <teks> ')
handler.tags = ['pushkontak']
handler.command = /^(pushsendkontak)$/i
handler.owner = true
handler.group = true

export default handler