import React from 'react';
import { connect } from 'react-redux';
import { onIncrement, onDecrement } from '../actions/PageActions';

class Counter extends React.Component {

    onDeleteCounter = (id) => (event) => {
        const {deleteCounter} = this.props;
        event.preventDefault();
        deleteCounter(id);
    }
    //
    // onIncrement = (id) => (event) => {
    //     const {onIncrement} = this.props;
    //     event.preventDefault();
    //     onIncrement(id)
    // }
    //
    // onDecrement = (id) => (event) => {
    //     const {onDecrement} = this.props;
    //     event.preventDefault();
    //     onDecrement(id)
    // }

    onIncrement = (id) => (event) => {
        event.preventDefault()
        this.props.handleOnIncrement(id)

        // const dataCopy = [...this.state.data];
        // const data = dataCopy.map((counter) => {
        //     if (counter.id === id) {
        //         counter.value = counter.value + 1;
        //     }
        // })
        // this.setState(data)
    }

    onDecrement = (id) => {
        // const dataCopy = [...this.state.data];
        // const data = dataCopy.map((counter) => {
        //     if (counter.id === id) {
        //         counter.value = counter.value - 1;
        //     }
        // })
        // this.setState(data)
    }

    render() {
        const {value, id} = this.props;

        return (

            <div className="counter">
                <strong>{value}</strong>
                <div className="counter-controls">
                    <button
                        onClick={this.onDecrement(id)}
                        className="button is-danger is-small">-
                    </button>
                    <button
                        onClick={this.onIncrement(id)}
                        className="button is-success is-small">+
                    </button>
                    <button
                        onClick={this.onDeleteCounter(id)}
                        className="button is-warning is-small">Del
                    </button>
                </div>
            </div>);
    }
}


const mapDispatchToProps = dispatch => {
    return {
        //handleOnIncrement: onIncrement,
        handleOnIncrement: (id) => dispatch(onIncrement(id)),
        onDecrement: () => dispatch(onDecrement(1))
    }
}

export default connect(null, mapDispatchToProps)(Counter);