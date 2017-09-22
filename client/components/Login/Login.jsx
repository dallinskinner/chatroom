import React from 'react';
import styles from './Login.scss';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      handle: '',
    };
  }

  handleHandleChange(e) {
    this.setState({
      handle: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.socket.logon(this.state.handle);
  }

  render() {
    return (
      <section>
        <h1 className={styles.welcome}>Chat Room</h1>
        <form className={styles.login} onSubmit={this.handleSubmit.bind(this)}>
          <input
            placeholder="Handle"
            type="text"
            onChange={this.handleHandleChange.bind(this)} />
          <input
            type="submit"
            value="Login" />
        </form>
      </section>
    );
  }
}
