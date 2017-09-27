import React from 'react';
import ChatSocket from './ChatSocket';

import Login from '../Login/Login.jsx';
import Chatbox from '../Chatbox/Chatbox.jsx';
import MessageWindow from '../MessageWindow/MessageWindow.jsx';
import Window from '../Window/Window.jsx';

import '../../global/global.scss';
import styles from './App.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    let url = window.location.hostname.includes('localhost') ?
      'http://localhost:3001' :
      `http://${window.location.hostname}`;

    this.chatSocket = new ChatSocket(
      url,
      this.updateMessages.bind(this),
      this.setHandle.bind(this)
    );

    this.state = {
      messages: [],
      handle: null,
    };
  }

  setHandle(handle) {
    this.setState({
      handle: handle,
    });
  }

  updateMessages(messages) {
    this.setState({
      messages: messages,
    });
  }

  componentDidMount() {
    this.chatSocket.initListeners();

    if (window.localStorage.getItem('chat-room-handle')) {
      this.chatSocket.logon(window.localStorage.getItem('chat-room-handle'));
    }
  }

  render() {

    let form;
    if (this.state.handle) {
      form = <Chatbox socket={this.chatSocket} handle={this.state.handle} />;
    } else {
      form = <Login socket={this.chatSocket} />;
    }

    return (
      <div>
        <div className={styles.bg}>
          <h1 className={styles.welcome}>Chat Room</h1>
        </div>
        <Window title={'Messages'} top={50} left={50}>
          <MessageWindow messages={this.state.messages} />
        </Window>
        <Window
          title={this.state.handle ? 'Chat' : 'Log In'}
          top={300}
          left={250}>

          {form}
        </Window>
      </div>
    );
  }
}