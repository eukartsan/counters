import React from 'react';

export default class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            value: 0
        };
    }


    onDeleteCounter = (id) => (event) => {
        const {deleteCounter} = this.props;
        event.preventDefault();
        deleteCounter(id);
    }

    onIncrement = (id) => (event) => {
        const {onIncrement} = this.props;
        event.preventDefault();
        onIncrement(id)
    }

    onDecrement = (id) => (event) => {
        const {onDecrement} = this.props;
        event.preventDefault();
        onDecrement(id)
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