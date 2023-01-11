const { SerialPort, ReadlineParser } = require('serialport')
// or
//import { SerialPort } from 'serialport'

// Create a port
const port = new SerialPort({
  path: '/dev/ttyACM0',
  baudRate: 9600,
})
//port.read
port.write('main screen turn on', function(err) {
    if (err) {
      return console.log('Error on write: ', err.message)
    }
    console.log('message written')
  })
  
  // Open errors will be emitted as an error event
  port.on('error', function(err) {
    console.log('Error: ', err.message)
  })

 // port.on('readable', function () {
 //   console.log('Data:', port.read())
 // })
 port.on('data', function (data) {
    console.log('Data:', parseInt(data))
  })
 //const lineStream = port.pipe(new Readline())
 // console.log(lineStream)
//port.r