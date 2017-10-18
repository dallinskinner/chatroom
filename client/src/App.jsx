'use strict';

import React from 'react';
import {Route} from 'react-router-dom';
import Home from './scenes/Home';
import Chat from './scenes/Chat';
import Shop from './scenes/Shop';
import Navbar from './components/Navbar';

import styles from './styles.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Home',
    };
  }

  updateTitle(title) {
    this.setState({
      title: title,
    });
  }

  render() {
    return (
      <div>

        <div className={styles.bg}>
          <h1 className={styles.welcome}>{this.state.title}</h1>
        </div>

        <Navbar />

        <Route exact path="/" render={(props) => {
          return <Home updateTitle={this.updateTitle.bind(this)} {...props} />;
        }} />
        <Route exact path="/chat" render={(props) => {
          return <Chat updateTitle={this.updateTitle.bind(this)} {...props} />;
        }} />
        <Route exact path="/shop" render={(props) => {
          return <Shop updateTitle={this.updateTitle.bind(this)} {...props} />;
        }} />

      </div>
    );
  }
}