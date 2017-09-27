'use strict';

import React from 'react';
import Chat from './scenes/Chat/index.jsx';
import Navbar from './components/Navbar/index.jsx';

import styles from './styles.scss';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className={styles.bg}>
          <h1 className={styles.welcome}>Chat Room</h1>
        </div>
        <Chat />
      </div>
    );
  }
}