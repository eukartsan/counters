import React, {Component} from 'react';
import './App.css';

const data = [
  {id: 1, value: 0},
  {id: 2, value: 0},
  {id: 3, value: 0}
];

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      value: 0
    };
  }

  onDecrement = () => {
      this.setState(({value}) => ({value: value - 1}))
  }

  onIncrement = () => {
      this.setState(({value}) => ({value: value + 1}))
  }

  render() {
    const {value} = this.state;
    return (<div className="counter">
      <b>{value}</b>
      <div className="counter-controls">
        <button
          onClick={this.onDecrement}
          className="button is-danger is-small">-</button>
        <button
          onClick={this.onIncrement}
          className="button is-success is-small">+</button>
      </div>
    </div>);
  }
}

class App extends Component {
  render() {
    return (<div>
      {data.map(counter => (
        <Counter
          key={counter.id}
          value={counter.value}/>))}
    </div>);
  }
}

export default App;
