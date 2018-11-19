import React from 'react';

export default class Counter extends React.Component {
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
                </div>
            </div>);
    }
}
