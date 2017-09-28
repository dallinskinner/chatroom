import React from 'react';
import styles from './styles.scss';

export default class MessageWindow extends React.Component {
  constructor(props) {
    super(props);
  }

  dateString(timestamp) {
    let date = new Date(timestamp);

    let hour = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    let prefix = date.getHours() > 12 ? 'p.m.' : 'a.m.';

    return `${hour}:${date.getMinutes()} ${prefix}`;
  }

  render() {
    return (
      <div className={styles.messages}>
        {this.props.messages.map((message, i) => {
          return (
            <p className={styles.message} key={i}>
              {message.text}
              <span
                className={styles.timestamp}>
                {this.dateString(message.time)}
              </span>
            </p>
          );
        })}
      </div>
    );
  }
}