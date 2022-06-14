let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ •  [62812-8403-5679]
│ •  [62812-8403-5679]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
