import React from 'react';
import styles from './Chatbox.scss';

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
    this.messageBox.value = '';
  }

  logout() {
    this.props.socket.logout();
  }

  render() {
    return (
      <form className={styles.chat} onSubmit={this.handleSubmit.bind(this)}>
        <label>Logged in as: {this.props.handle}</label>
        <button
          className={styles.logout}
          onClick={this.logout.bind(this)}>Logout</button>
        <br />

        <textarea
          ref={el => this.messageBox = el}
          className={styles['message-box']}
          placeholder="Message"
          onChange={this.handleMessageChange.bind(this)} />
        <input
          type="submit"
          value="Send" />
      </form>
    );
  }
}
