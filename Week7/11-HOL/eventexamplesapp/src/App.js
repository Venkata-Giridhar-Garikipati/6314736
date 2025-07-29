import React from 'react';
import CurrencyConvertor from './components/CurrencyConvertor';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      clickedMessage: ''
    };
  }

  increment = () => {
    this.setState((prev) => ({ count: prev.count + 1 }));
  };

  decrement = () => {
    this.setState((prev) => ({ count: prev.count - 1 }));
  };

  sayHello = () => {
    console.log("Hello! This is a static message.");
  };

  handleIncrementClick = () => {
    this.increment();
    this.sayHello();
  };

  sayWelcome = (msg) => {
    alert(`Say ${msg}`);
  };

  handleSyntheticEvent = (e) => {
    this.setState({ clickedMessage: 'I was clicked' });
    console.log(e); // Synthetic event object
  };

  render() {
    return (
      <div style={{ padding: '20px' }}>
        <h1>🎯 React Event Handling Lab</h1>

        <h2>Counter: {this.state.count}</h2>
        <button onClick={this.handleIncrementClick}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>

        <br /><br />
        <button onClick={() => this.sayWelcome('Welcome')}>Say Welcome</button>

        <br /><br />
        <button onClick={this.handleSyntheticEvent}>OnPress</button>
        {this.state.clickedMessage && <p>{this.state.clickedMessage}</p>}

        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;
