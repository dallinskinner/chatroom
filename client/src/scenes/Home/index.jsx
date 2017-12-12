import React from 'react';

import styles from './styles.scss';

export default class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      images: [
        require('./img/work-stuff.gif'),
        require('./img/click-here.gif'),
      ],
    };

    this.nextGif = this.nextGif.bind(this);
  }

  componentDidMount() {
    this.props.updateTitle('Loser Interface');
  }

  nextGif() {
    let index = this.state.index + 1;

    if (index === this.state.images.length) {
      index = 0;
    }

    this.setState({
      index: index,
    });
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <button className={styles.button} onClick={this.nextGif}>
          <img
            className={styles.gif}
            src={this.state.images[this.state.index]} />;
        </button>
      </div>
    );
  }
}