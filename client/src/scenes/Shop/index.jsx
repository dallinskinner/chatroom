import React from 'react';

export default class Shop extends React.Component {
  constructor(props) {
    super(props);

    this.timer;

    this.buyNow = 'Buy Now';
    this.spendMoney = 'Spend Money';

    this.state = {
      title: this.buyNow,
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

  render() {
    return (
      <div />
    );
  }
}