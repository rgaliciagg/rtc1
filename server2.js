const { SerialPort, ReadlineParser } = require('serialport')
const port = new SerialPort({
    path: '/dev/ttyACM0',
    baudRate: 9600 })
const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }))
parser.on('data', console.log)
//parser.on('data', (data) => {
 //   secs=data
//    console.log(data)
//})
