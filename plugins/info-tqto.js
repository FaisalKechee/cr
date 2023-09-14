import fetch from 'node-fetch'
let handler = async (m, { conn, args, participants, text, usedPrefix, command }) => {

///GK USAH HAPUS TAMBAH IN AJA NAMA LO JANGAN HAPUS SATU NAMA PUN CREDITS NYAH TAU DIRI LAH TOT🗿
let tqto = `
*My Project:* 21 𝐷𝑒𝑠𝑒𝑚𝑏𝑒𝑟 2021
*Name:* ${global.nameown}
*Contact:* wa.me/${global.nomorown}

sc : https://youtube.com/@masfaiz77

⫹❰⫺ BiG Thanks To ⫹❱⫺
Allah Yang Maha Esa
Orang Tua

⫹⫺ The Name That Helped me ⫹⫺ 

Faisal
Aldi Lesmana
Wh Mods Dev
XTRAM-TEAM`
conn.sendMessage(m.chat, {
text: tqto,
contextInfo: {
externalAdReply: {
title: v,
thumbnailUrl: zykomd,
sourceUrl: sgc,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
} 
handler.help = ['tqto']
handler.tags = ['main','info']
handler.command = /^(credits|credit|tqto)$/i
export default handler
