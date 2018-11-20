import React from 'react';

export default class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            value: 0
        };
    }


    onDeleteCounter = (id) => () => {
        const {deleteCounter} = this.props;
        //event.preventDefault();
        deleteCounter(id);
    }

    onIncrement = (id) => (event) => {
        const {onIncrement} = this.props;
        event.preventDefault();
        onIncrement(id)
    }

    render() {
        const {value, id, onDecrement} = this.props;

        return (

            <div className="counter">
                <strong>{value}</strong>
                <div className="counter-controls">
                    <button
                        onClick={onDecrement}
                        className="button is-danger is-small">-
                    </button>
                    <button
                        onClick={this.onIncrement(id)}
                        className="button is-success is-small">+
                    </button>
                    <button
                        onClick={this.onDeleteCounter(id)}>
                        Delete
                    </button>
                </div>
            </div>);
    }
}