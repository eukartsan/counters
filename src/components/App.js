import React from 'react';
import Counter from './Counter'
import './App.css';
import Total from './Total'
import uuidv4 from 'uuid/v4';
//import {connect} from 'react-redux';
//import {onIncrement, onDecrement} from '../actions/PageActions';

class App extends React.Component {
    constructor() {
        super()

        this.state = {
            data: [
                {id: uuidv4(), value: 0},
                {id: uuidv4(), value: 0},
                {id: uuidv4(), value: 0}
            ]
        };
    }

    addCounter = () => {
        this.setState((prevState) => {
            const newCounter = {
                id: uuidv4(),
            }

            return {
                data: [...prevState.data, newCounter]
            };
        })
    }

    render() {
        return (
            <div>
                {this.state.data.map(counter => (
                    <Counter
                        key={counter.id}
                        value={counter.value}/>))}
                <Total
                    addCounter={this.addCounter}
                />
            </div>);
    }
}

export default App;

// class App extends React.Component {
//     render() {
//         return (
//             <div>
//                 {this.props.dataCounters.map(counter => (
//                     <Counters
//                         value={counter.value}
//                         incrementCounter={this.props.incrementCounter}
//                         decrementCounter={this.props.decrementCounter}
//                         key={counter.id}/>))}
//             </div>);
//     }
// }
//
// function mapStateToProps(state) {
//     return {
//         dataCounters: state.data
//     };
// }
//
//
// const mapDispatchToProps = dispatch => {
//     return {
//         incrementCounter: () => dispatch(onIncrement(1)),
//         decrementCounter: () => dispatch(onDecrement(1))
//     }
// }
//
//
// export default connect(mapStateToProps, mapDispatchToProps)(App);
