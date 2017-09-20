import io from 'socket.io-client';

let socket = io();

socket.on('slack message', (data) => {
  document.querySelector('#output').html = `Slack Message ${data.date}`;
});