const QRCode = require('qrcode')

const url = "http://localhost:3000"

QRCode.toFile('qrcode.png', url, {
    color: {
      dark: '#000000',
      light: '#ffffff'
    }
  }, function (err) {
    if (err) throw err
    console.log('QR Code gerado!')
  })