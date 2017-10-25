'use strict';

let express = require('express');
let app = express();
let server = require('http').createServer(app);
let io = require('socket.io')(server);
let port = process.env.PORT || 3001;
let cors = require('cors');

app.use(cors({
  origin: 'http://localhost:3001',
  credentials: true,
}));

server.listen(port, function() {
  console.log(`Server listening at port ${port}`);
});

let staticServe = express.static(`${__dirname}/../client`);

app.use(staticServe);
app.use('/', staticServe);
app.use('*', staticServe);

io.on('connection', socket => {

  socket.on('user connect', (data) => {
    io.emit('user notification', {
      handle: data.handle,
      time: new Date(),
    });
  });

  socket.on('message send', (data) => {
    io.emit('message received', {
      handle: data.handle,
      message: data.message,
      time: new Date(),
    });
  });
});