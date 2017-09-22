import React from 'react';
import styles from './MessageWindow.scss';

export default class MessageWindow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.messages}>
        {this.props.messages.map((message, i) => {
          return <p className={styles.message} key={i}>{message}</p>;
        })}
      </div>
    );
  }
}