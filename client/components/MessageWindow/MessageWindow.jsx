import React from 'react';

export default class MessageWindow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.messages.map((message, i) => {
          return <p key={i}>{message}</p>;
        })}
      </div>
    );
  }
}