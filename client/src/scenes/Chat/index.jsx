import React from 'react';
import ChatSocket from '../../services/ChatSocket';

import Login from './Login';
import Chatbox from './Chatbox';
import MessageWindow from './MessageWindow';
import Window from '../../components/Window';

import '../../global/global.scss';

export default class Chat extends React.Component {
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
    this.props.updateTitle('Chat Room');

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
        <Window title={'Messages'} top={68} left={0}>
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