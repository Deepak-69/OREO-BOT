import fetch from 'node-fetch'

let handler = async (m, { oreo }) => {

let msg = `Indonesia Hot Girl 🥵🔥`
let endpoint = `https://shizoapi.onrender.com/api/pies/Indonesia?apikey=${shizokeys}`
const response = await fetch(endpoint);
if (response.ok) {
      const imageBuffer = await response.buffer();
      await oreo.sendFile(m.chat, imageBuffer, 'shizo.techie.error.png', msg, m, null, rpig);
    } else {
      throw bug
    }
}

handler.tags = ['pies', 'sfw']
handler.help = handler.command = ['indopie']

export default handler
