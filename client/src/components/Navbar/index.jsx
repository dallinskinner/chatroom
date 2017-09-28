import React from 'react';
import {NavLink} from 'react-router-dom';

import styles from './styles.scss';

export default class Navbar extends React.Component {
  render() {

    return (
      <nav className={styles.main}>
        <h2 className={styles.logo}>Loser Interface</h2>
        <ul className={styles.links}>
          <li>
            <NavLink className={'btn'} to="/" title="Chat">
              <img src={require('./img/chat.svg')} alt="Chat" />
            </NavLink>
          </li>
          <li>
            <NavLink className={'btn'} to="/shop" title="Shop">
              <img src={require('./img/shop.svg')} alt="Shop" />
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}