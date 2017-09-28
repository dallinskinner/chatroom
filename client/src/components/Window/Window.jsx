import React from 'react';

import styles from './styles.scss';

export default class Window extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      minimized: false,
      dragging: false,
      xStart: null,
      yStart: null,
      xDelta: null,
      yDelta: null,
      top: props.top,
      left: props.left,
    };
  }

  componentDidMount() {
    window.addEventListener('mousemove', this.didDrag.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.didDrag.bind(this));
  }

  startDrag(e) {
    e.preventDefault();
    this.setState({
      dragging: true,
      xStart: e.clientX,
      yStart: e.clientY,
    });
  }

  didDrag(e) {
    e.preventDefault();
    if (this.state.dragging) {
      this.setState({
        xDelta: e.clientX - this.state.xStart,
        yDelta: e.clientY - this.state.yStart,
      });
    }
  }

  endDrag(e) {
    this.setState({
      dragging: false,
      xStart: null,
      yStart: null,
      xDelta: null,
      yDelta: null,
      top: this.state.top + this.state.yDelta,
      left: this.state.left + this.state.xDelta,
    });
  }

  windowStyle(existing) {
    if (this.state.minimized) {
      return `${existing} ${styles.minimized}`;
    }

    return existing;
  }

  toggleMinimize() {
    this.setState({
      minimized: !this.state.minimized,
    });
  }

  render() {

    let position = {
      left: `${this.state.left}px`,
      top: `${this.state.top}px`,
    };

    if (this.state.dragging) {
      let transform = {};

      transform = {
        transform: `translate(${this.state.xDelta}px, ${this.state.yDelta}px)`,
      };

      Object.assign(position, transform);
    }

    return (
      <section style={position} className={this.windowStyle(styles.window)}>
        <div
          className={styles.bar}
          onMouseDown={e => this.startDrag(e)}
          onMouseUp={e => this.endDrag(e)}>

          <h3 className={styles.title}>{this.props.title}</h3>
          <button
            className={styles.minimize}
            onClick={this.toggleMinimize.bind(this)} />
        </div>
        <div className={styles.content}>
          {this.props.children}
        </div>
      </section>
    );
  }
}