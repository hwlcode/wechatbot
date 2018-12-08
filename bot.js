const { Wechaty } = require('wechaty') // import { Wechaty } from 'wechaty'
const QrcodeTerminal = require('qrcode-terminal');

Wechaty.instance() // Singleton
    .on('scan', (url, code) => {
        console.log(`Scan QR Code to login: ${code}\n${url}`)
    if (!(/201|200/).test(String(code))) {
        const loginUrl = url.replace(/\/qrcode\//, '/l/')
        QrcodeTerminal.generate(loginUrl, { small: true})
    }
    })
    .on('login',        user => console.log(`User ${user} logined`))
    .on('message',   message => console.log(`Message: ${message}`))
    .start()