import React from 'react';

export default class Product extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <article>
        <h2>{this.props.name}</h2>
        <p>{this.props.price}</p>
      </article>
    );
  }
}