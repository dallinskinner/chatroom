import React from 'react';

export default class Shop extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.updateTitle('Coming Soon');
  }

  render() {
    return (
      <div />
    );
  }
}