let handler = async (m, { conn, command, text }) => {

let love = `

*✥━─━⌬ 𝒎𝒆𝒈𝒐_𝒃𝒐𝒕 ⌬━─━✥*
【..≼قــســم الــترفيــه≽..】
*⋄━───═◞⬪⋇⬪◟═───━⋄*
❐..🎮╎❯ .اكس_او⌉
❐..🎮╎❯ .احذف_اللعبه⌉
❐..🎮╎❯ .تحدي⌉
❐..🎮╎❯ .حرب⌉
❐..🎮╎❯ .احزر⌉
❐..🎮╎❯ .حظ⌉
❐..🎮╎❯ .جميل⌉
❐..🎮╎❯ .صفع⌉
❐..🎮╎❯ .طبطبه⌉
❐..🎮╎❯ .ورع⌉
❐..🎮╎❯ .اهبل⌉
❐..🎮╎❯ .خروف⌉
❐..🎮╎❯ .انطق⌉
❐..🎮╎❯ .نسبه⌉
❐..🎮╎❯ .لو⌉
❐..🎮╎❯ .تويت⌉
❐..🎮╎❯ .تاج⌉
❐..🎮╎❯ .سؤال⌉
❐..🎮╎❯ .اسئلني⌉
❐..🎮╎❯  كت⌉
❐..🎮╎❯ .شطرنج⌉
❐..🎮╎❯ .سلاحي
❐..🎮╎❯ .علم⌉
❐..🎮╎❯ .نصايح⌉
❐..🎮╎❯ .علم⌉
❐..🎮╎❯ .عكس⌉
❐..🎮╎❯ .تويت⌉
❐..🎮╎❯ .مراتي⌉
❐..🎮╎❯ .فزوره⌉
❐..🎮╎❯ .لغز⌉
❐..🎮╎❯ .حروف⌉
❐..🎮╎❯ .شخصيه⌉
❐..🎮╎❯ .احرجني⌉
❐..🎮╎❯ .خمن⌉
❐╎..🎮❯ .شاذ⌉
❐..🎮╎❯ .فكك⌉
❐..🎮╎❯ .المارد⌉
❐..🎮╎❯ .ايمو⌉
❐..🎮╎❯ .دين⌉
❐..🎮╎❯ .كوره⌉
❐..🎮╎❯ .رياضيات⌉
*✥━─━⌬ 𝒎𝒆𝒈𝒐_𝒃𝒐𝒕 ⌬━─━✥*

 `.trim()

m.reply(love, null, { mentions: conn.parseMention(love) })}

handler.help = ['love']

handler.tags = ['fun']

handler.command = /^(الترفيه)$/i

export default handler
