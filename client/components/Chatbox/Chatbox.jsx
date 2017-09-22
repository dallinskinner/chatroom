import React from 'react';

export default class Chatbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
  }

  handleMessageChange(e) {
    this.setState({
      message: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.socket.sendMessage(this.props.handle, this.state.message);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>Logged in as: {this.props.handle}</label><br />
        <textarea
          placeholder="Message"
          onChange={this.handleMessageChange.bind(this)} />
        <input
          type="submit"
          value="Send" />
      </form>
    );
  }
}
