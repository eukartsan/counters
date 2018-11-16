import React from 'react';
import { connect } from 'react-redux';

class Counters extends React.Component {

  onIncrement = () => {
    this.props.dispatch({ type: 'INCREMENT' });
  }

  onDecrement = () => {
    this.props.dispatch({ type: 'DECREMENT' });
  }

  render() {
    const {value} = this.props;
    return (
      <div className="counter">
      <b>{value}</b>
      <div className="counter-controls">
        <button
          onClick={this.onDecrement}
          className="button is-danger is-small">-</button>
        <button
          onClick={this.onIncrement}
          className="button is-success is-small">+</button>
      </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    value: state.value
  };
}

export default connect(mapStateToProps)(Counters);
