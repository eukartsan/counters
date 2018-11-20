import React from 'react';

export default class Counter extends React.Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         value: 0
    //     };
    // }
    //
    // onDecrement = () => {
    //     this.setState(({value}) => ({value: value - 1}))
    // }
    //
    // onIncrement = () => {
    //     this.setState(({value}) => ({value: value + 1}))
    // }

    onDeleteCounter = () => (event) => {
        const {deleteCounter} = this.props;
        event.preventDefault();
        deleteCounter();
    }

    render() {
        const {value} = this.props;

        return (

            <div className="counter">
                <b>{value}</b>
                <div className="counter-controls">
                    <button
                        onClick={this.onDecrement}
                        className="button is-danger is-small">-
                    </button>
                    <button
                        onClick={this.onIncrement}
                        className="button is-success is-small">+
                    </button>
                    <button
                        onClick={this.onDeleteCounter()}>
                        Delete
                    </button>
                </div>
            </div>);
    }
}