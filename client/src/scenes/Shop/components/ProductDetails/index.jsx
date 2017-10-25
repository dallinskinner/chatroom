import React from 'react';

import styles from './styles.scss';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      qty: 1,
    };
  }

  handleQtyChange(e) {

    let value;
    if (e.target.value !== '') {
      let int = parseInt(e.target.value, 10);

      if (!isNaN(int)) {
        value = int;
      } else {
        value = 1;
      }
    } 

    this.setState({
      qty: value,
    });
  }

  render() {
    return (
      <section className={styles.details}>
        <div className={styles.column}>
          <div className={styles.description}>{this.props.description}</div>
          <div className={styles.price}>${this.props.price}.00 Money</div>
        </div>
        <div className={styles.column}>
          {/* <div className={styles.quantity}>
            <input
              className={styles['qty-input']}
              min="1"
              type="text"
              value={this.state.qty}
              onChange={this.handleQtyChange.bind(this)}
            />
          </div>
          <input className={styles.submit} type="submit" value="Add to Cart" /> */}
          <p>Online checkout coming soon!<br/><br/>Until then, email <a href="mailto:hello@loser-interface.com">hello@loser-interface.com</a> and<br />tell us what you want, what you really, really want.<br /><br />Zigazig ah.</p>
        </div>
        
      </section>
    );
  }
}