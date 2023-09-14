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

import axios from "axios"
import uploadImage from "../lib/uploadImage.js"
import {
    sticker
} from "../lib/sticker.js"

let handler = async (m, { conn, text, usedPrefix, command }) => {

    if (command == "qcs") {
         if (!text) throw `Contoh:\n${usedPrefix + command} hallo`
         if (text.length > 100) return  conn.reply(m.chat, `🚩 Max 100 character.`, m)
         const pushname = m.pushName || "No Name"
         let randomColor = ['#ef1a11', '#89cff0', '#660000', '#87a96b', '#e9f6ff', '#ffe7f7', '#ca86b0', '#83a3ee', '#abcc88', '#80bd76', '#6a84bd', '#5d8d7f', '#530101', '#863434', '#013337', '#133700', '#2f3641', '#cc4291', '#7c4848', '#8a496b', '#722f37', '#0fc163', '#2f3641', '#e7a6cb', '#64c987', '#e6e6fa']
         let apiColor = randomColor[Math.floor(Math.random() * randomColor.length)]
         let jsonnya = {
            type: "quoted",
            format: "webp",
            backgroundColor: apiColor,
            width: 768,
            height: 768,
            scale: 2,
            messages: [
          {
          entities: [],
          avatar: true,
          from: {
            id: 1,
            name: pushname,
           photo: {
             url: await conn.profilePictureUrl(m.sender, "image").catch(() => 'https://telegra.ph/file/999b290ecb3e50107a9da.jpg'),
            }
            },
            text: text,
            replyMessage: {},
            },
          ],
        }
        let post = await axios.post("https://bot.lyo.su/quote/generate",
         jsonnya,{
           headers: { "Content-Type": "application/json"},
         })
         let buff = await Buffer.from(post.data.result.image, "base64")
         let img = await uploadImage(buff)
        let stiker = await sticker(false, img, global.packname, global.author)
         if (buff == undefined) return reply('error')
         //conn.sendStimg(m.chat, buff, m, { packname: packname, author: author })
         //conn.sendMessage(m.chat, buff,{ packname: packname, author: author },"sticker")
         conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, null, fakes)
}

if (command == "qci") {
    if (!text) throw `Contoh:\n${usedPrefix + command} hallo`
    if (text.length > 100) return  conn.reply(m.chat, `🚩 Max 100 character.`, m)
    const pushname = m.pushName || "No Name"
    let randomColor = ['#ef1a11', '#89cff0', '#660000', '#87a96b', '#e9f6ff', '#ffe7f7', '#ca86b0', '#83a3ee', '#abcc88', '#80bd76', '#6a84bd', '#5d8d7f', '#530101', '#863434', '#013337', '#133700', '#2f3641', '#cc4291', '#7c4848', '#8a496b', '#722f37', '#0fc163', '#2f3641', '#e7a6cb', '#64c987', '#e6e6fa']
    let apiColor = randomColor[Math.floor(Math.random() * randomColor.length)]
    let jsonnya = {
       type: "quoted",
       format: "webp",
       backgroundColor: apiColor,
       width: 768,
       height: 768,
       scale: 2,
       messages: [
     {
     entities: [],
     avatar: true,
     from: {
       id: 1,
       name: pushname,
      photo: {
        url: await conn.profilePictureUrl(m.sender, "image").catch(() => 'https://telegra.ph/file/999b290ecb3e50107a9da.jpg'),
       }
       },
       text: text,
       replyMessage: {},
       },
     ],
   }
   let post = await axios.post("https://bot.lyo.su/quote/generate",
    jsonnya,{
      headers: { "Content-Type": "application/json"},
    })
    let buff = await Buffer.from(post.data.result.image, "base64")
    if (buff == undefined) return reply('error')
    conn.sendFile(m.chat, buff, '', '', m, null, fakes)
}
}

handler.help = ['qcs', 'qci'].map(v => v + ' <text> ')
handler.tags = ['sticker']  
handler.command = /^(qcs|qci)$/i
handler.limit = true
export default handler