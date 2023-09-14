import fetch from 'node-fetch';
import { ChatGpt } from '../lib/scrape.js'
const handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw 'Hai, ada yang bisa saya bantu?';

  const data = await ChatGpt(text);
  m.reply(`${data.text}`.trim());
};

handler.help = ['ai', 'openai', 'zy'].map(v => v + ' <text>')
handler.tags = ['openai'];
handler.command = /^(ai|openai|zy)$/i;

export default handler;

