"use strict";

let express = require('express');
let app = express();
let server = require('http').createServer(app);
let io = require('socket.io')(server);
let port = process.env.PORT || 3000;

server.listen(port, function () {
    console.log(`Server listening at port ${port}`);
});

app.use(express.static(`${__dirname}/../client`));

io.on('connection', socket => {
    setInterval(() => {
        socket.broadcast.emit('slack message', {
            date: new Date()
        });
    }, 1000)
})