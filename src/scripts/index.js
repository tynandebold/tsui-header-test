import '../styles/index.scss';
import { props, withComponent } from 'skatejs';
import { wrap } from '@skatejs/renderer-react';
import React from 'react';

class HelloReact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

class WrapReact extends withComponent(wrap(HelloReact)) {
  static get props() {
    return {
      name: props.string
    };
  }
}

customElements.define('wrap-react', WrapReact);