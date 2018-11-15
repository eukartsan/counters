import React from 'react';
import Counter from './Counter'
import Total from './Total'
import './App.css';

const data = [
  {id: 1, value: 0},
  {id: 2, value: 0},
  {id: 3, value: 0}
];

class App extends React.Component {
  render() {
    return (
      <div>
      {data.map(counter => (
        <Counter
          key={counter.id}
          value={counter.value}/>))}
        <Total />
      </div>);
  }
}

export default App;