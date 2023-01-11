const express = require('express')
const app = express()
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const { SerialPort, ReadlineParser } = require('serialport')
const port = new SerialPort({
    path: '/dev/ttyACM0',
    baudRate: 9600 })
const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }))

//const port = 3000
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.send('Hello World!')
})

io.on('connection', (socket) => {
  console.log('a user connected');
  parser.on('data', (data) => {
    //    secs=data
        //console.log(data)
        process.stdout.write(data + "\r");
        socket.emit('time', data); //send button status to client
})
});

server.listen(8080, () => {
  console.log('listening on *:8080');
});
