import React, { Component, PropTypes } from 'react';

class App extends Component {

  static propTypes = {
    hello: PropTypes.string.isRequired,
    sayHello: PropTypes.func.isRequired
  };

  render() {
    const { hello, sayHello } = this.props;

    return <h1 onClick={sayHello}>{hello}World!</h1>;
  }

}

export default App;
