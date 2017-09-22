import React from 'react';
import ChatSocket from './ChatSocket';

import Login from '../Login/Login.jsx';
import Chatbox from '../Chatbox/Chatbox.jsx';
import MessageWindow from '../MessageWindow/MessageWindow.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.chatSocket = new ChatSocket(
      'http://localhost:3001',
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
        <MessageWindow messages={this.state.messages} />
        {form}
      </div>
    );
  }
}