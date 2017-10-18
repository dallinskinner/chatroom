import React from 'react';

export default class Chat extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.updateTitle('Loser Interface');
  }

  render() {
    return null;
  }
}