import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)

let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp;Faisal\nNICKNAME:👑 FaisalDev\nORG:FaisalDev\nTITLE:soft\nitem1.TEL;waid=6283134409906:+62 831-3440-9906\nitem1.X-ABLabel:📞 Nomor Owner\nitem2.URL:https://youtube.com/@masfaiz77\nitem2.X-ABLabel:💬 More\nitem3.EMAIL;type=INTERNET: faisaldzop@gmail.com\nitem3.X-ABLabel:💌 Mail Owner Faisal Ganteng\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:💬 More\nitem4.X-ABLabel:📍 Lokasi Saya\nBDAY;value=date:🐦 21-12-2010\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: global.fkontak })
let caption = `👋 Hai *@${who.split("@")[0]}*, Nih Owner ku kak`
    await conn.reply(m.chat, caption, tag_own, { mentions: conn.parseMention(caption) })

}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|pengembang|creator)$/i

export default handler