import io from 'socket.io-client';

export default class ChatSocket {
  constructor(url, messageCallback, logonCallback) {
    this.socket = io(url);

    this.messages = [];

    this.messageTypes = {
      USER_CONNECT: 'user connect',
      USER_NOTIFICATION: 'user notification',
      MESSAGE_SEND: 'message send',
      MESSAGE_RECEIVED: 'message received',
    };

    this.messageCallback = messageCallback;
    this.logonCallback = logonCallback;
  }

  initListeners() {
    this.socket.on(this.messageTypes.MESSAGE_RECEIVED, (data) => {
      this.messages.push({
        text: `${data.handle}: ${data.message}`,
        time: data.time,
      });
      this.messageCallback(this.messages);
    });

    this.socket.on(this.messageTypes.USER_NOTIFICATION, (data) => {
      this.messages.push({
        text: `${data.handle} logged on`,
        time: data.time,
      });
      this.messageCallback(this.messages);
    });
  }

  logon(handle) {
    this.socket.emit(this.messageTypes.USER_CONNECT, {
      handle: handle,
    });

    window.localStorage.setItem('chat-room-handle', handle);

    this.logonCallback(handle);
  }

  logout() {
    window.localStorage.removeItem('chat-room-handle');
    this.logonCallback(null);
  }

  sendMessage(handle, message) {
    this.socket.emit(this.messageTypes.MESSAGE_SEND, {
      handle: handle,
      message: message,
    });
  }
}