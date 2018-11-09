import React, {Component} from 'react';
import './App.css';

// state data for 3 counters
const data = [
  {
    id: 1,
    value: 0
  }, {
    id: 2,
    value: 0
  }, {
    id: 3,
    value: 0
  }
];

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      value: 0
    };
  }

  onDecrement = () => {

    this.setState({
      value: this.state.value - 1
    });
  }

  onIncrement = () => {
    this.setState({
      value: this.state.value + 1
    });
  }

  render() {
    const {value} = this.props;
    return (<div className="counter">
      <b>{this.state.value}</b>
      <div className="counter-controls">
        <button onClick={this.onDecrement} className="button is-danger is-small">-</button>
        <button onClick={this.onIncrement} className="button is-success is-small">+</button>
      </div>
    </div>);
  }
}

class App extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (<div>
      {data.map(counter => (<Counter key={counter.id} value={counter.value}/>))}
    </div>);
  }
}

export default App;
