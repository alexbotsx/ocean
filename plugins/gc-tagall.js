const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `*@inkaikos_ff:* ${pesan}`;
  let teks = `*⺀🟡𝗘𝗧𝗜𝗤𝗨𝗘𝗧𝗔 𝗚𝗘𝗡𝗘𝗥𝗔𝗟⺀*\n\n ${oi}\n\n ⚫𝗜𝗡𝗞𝗔𝗜𝗞𝗢𝗦—𝗕𝗢𝗧 🟡\n`;
  for (const mem of participants) {
    teks += `🟡➤ @${mem.id.split('@')[0]}\n`;
  }
  teks += `*└* 𝗡𝗞𝗔𝗕𝗢𝗧\n\n*🏴‍☠️*`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;