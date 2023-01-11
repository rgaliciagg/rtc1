const { SerialPort } = require('serialport')
//const { DelimiterParser } = require('@serialport/parser-delimiter')
const { ReadlineParser } = require('@serialport/parser-readline')
const port = new SerialPort({
    path: '/dev/ttyACM0',
    baudRate: 9600
})

//const parser = port.pipe(new DelimiterParser({ delimiter: '\r\n' }))
//parser.on('data', console.log)
//parser.on('open', function(){
//    console.log('Conexion abierta');
//});
/*
parser.on('data', function(data){
    var enc = new TextDecoder();
    var arr = new Uint8Array(data);
    ready = enc.decode(arr);
    console.log(ready);
//console.log(data);
})
*/
const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }))
parser.on('data', console.log)
