let fs = require('fs')
let handler = async (m) => {
let huaaa = fs.readFileSync('./mp3/iya.opus')
conn.sendFile(m.chat, iya, '', '', m, true)
}

handler.customPrefix = /^(iya|iyaaaaaaa|iyaa|iyaaaa)$/i
handler.command = new RegExp

handler.limit = true

module.exports = handler
