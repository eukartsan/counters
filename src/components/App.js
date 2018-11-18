import React from 'react';
import Counters from './Counters'
import './App.css';
import {connect} from 'react-redux';
import {onIncrement, onDecrement} from '../actions/PageActions';

class App extends React.Component {
    render() {
        return (
            <div>
                {this.props.dataCounters.map(counter => (
                    <Counters
                        value={counter.value}
                        incrementCounter={this.props.incrementCounter}
                        decrementCounter={this.props.decrementCounter}
                        key={counter.id}/>))}
            </div>);
    }
}

function mapStateToProps(state) {
    return {
        dataCounters: state.data
    };
}


const mapDispatchToProps = dispatch => {
    return {
        incrementCounter: () => dispatch(onIncrement(1)),
        decrementCounter: () => dispatch(onDecrement(1))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
