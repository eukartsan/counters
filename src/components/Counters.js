import React from 'react';


class Counters extends React.Component {
    render() {
        const {value, decrementCounter, incrementCounter} = this.props;

        return (
            <div className="counter">
                <b>{value}</b>
                <div className="counter-controls">
                    <button
                        onClick={decrementCounter}
                        className="button is-danger is-small">-
                    </button>
                    <button
                        onClick={incrementCounter}
                        className="button is-success is-small">+
                    </button>
                </div>
            </div>
        )
    }
}

export default Counters
