import React from 'react';

import styles from './styles.scss';

export default class Product extends React.Component {
  constructor(props) {
    super(props);
  }

  productClass(existing) {
    if (this.props.isSelected) {
      return `${existing} ${styles.active}`;
    }

    return existing;
  }

  render() {
    return (
      <article
        className={this.productClass(styles.thumb)}
        onClick={() => {this.props.select(this.props.product)}}>
        <img className={styles.image} src={this.props.image} />
        <h2>{this.props.name}</h2>
      </article>
    );
  }
}