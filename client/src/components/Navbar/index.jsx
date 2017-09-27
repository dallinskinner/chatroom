import React from 'react';

import styles from './Navbar.scss';

export default class Navbar extends React.Component {
  render() {

    return (
      <nav className={styles.main}>
        <h2 className={styles.logo}>Loser Interface</h2>
        <ul className={styles.links}>
          <li>
            <a className={'btn active'} href="/" title="Chat">
              <img src={require('./img/chat.svg')} alt="Chat" />
            </a>
          </li>
          <li>
            <a className={'btn'} href="/" title="Shop">
              <img src={require('./img/shop.svg')} alt="Shop" />
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}