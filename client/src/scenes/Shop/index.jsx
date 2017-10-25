import React from 'react';
import products from './products.js';

import Window from '../../components/Window';
import ProductThumb from './components/ProductThumb';
import ProductDetails from './components/ProductDetails';

import styles from './styles.scss';

export default class Shop extends React.Component {
  constructor(props) {
    super(props);

    this.timer;

    this.buyNow = 'Buy Now';
    this.spendMoney = 'Spend Money';

    this.state = {
      title: this.buyNow,
      products: products,
      selectedProduct: null,
      activeImage: 0,
    };
  }

  componentDidMount() {
    this.props.updateTitle(this.state.title);

    this.timer = setInterval(this.switchText.bind(this), 5000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  switchText() {
    if (this.state.title === this.buyNow) {
      this.setState({title: this.spendMoney});
      this.props.updateTitle(this.spendMoney);
    } else {
      this.setState({title: this.buyNow});
      this.props.updateTitle(this.buyNow);
    }
  }

  selectProduct(product) {
    this.setState({
      selectedProduct: product,
      activeImage: 0,
    });
  }

  nextImage() {
    let next = this.state.activeImage + 1;
    if (next === this.state.selectedProduct.image.length) {
      next = 0;
    }

    this.setState({
      activeImage: next,
    });
  }

  render() {
    return (
      <section>
        {this.state.selectedProduct &&
          <img
            className={styles.image}
            src={this.state.selectedProduct.image[this.state.activeImage]}
            onClick={this.nextImage.bind(this)}
          />}

        <Window title={'Shop'} top={300} left={255}>
          <div className={styles.thumbs}>
            {this.state.products.map((product, i) => {
              return (
                <ProductThumb
                  key={i}
                  name={product.name}
                  image={product.image[0]}
                  product={product}
                  isSelected={this.state.selectedProduct === product}
                  select={this.selectProduct.bind(this)} />
              );
            })}
          </div>
        </Window>

        {this.state.selectedProduct &&
          <Window title={this.state.selectedProduct.name} top={100} left={500}>
            <ProductDetails
              name={this.state.selectedProduct.name}
              price={this.state.selectedProduct.price}
              description={this.state.selectedProduct.description}
            />
          </Window>
        }
      </section>
    );
  }
}
