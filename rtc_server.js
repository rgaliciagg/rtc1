const { SerialPort, ReadlineParser } = require('serialport');
const Readline = SerialPort.parsers.Readline;
//const Readline = SerialPort.parsers.Readline;
const parser = new Readline();
const mySerial = new SerialPort('dev/ttyACM0' , {
    baudRate: 9600
});

mySerial.on('open',function(){
    console.log('Opened Serial Port');
});