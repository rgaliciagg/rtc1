const { SerialPort, ReadlineParser } = require('serialport');
const port = new SerialPort( ttyACM0,  9600);
const parser = new ReadlineParser();
port.pipe(parser);
parser.on('data', console.log);
port.write('ROBOT PLEASE RESPOND\n');
// ROBOT ONLINE

// Creating the parser and piping can be shortened to
//const parser = port.pipe(new ReadlineParser())
