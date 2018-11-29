import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { onIncrement, onDecrement, onDeleteCounter, onResetCounter } from '../actions/PageActions'

class Counter extends React.Component {
    static propTypes = {
        value: PropTypes.number.isRequired,
        id: PropTypes.string.isRequired,
        handleOnIncrement: PropTypes.func.isRequired,
        handleOnDecrement: PropTypes.func.isRequired,
        handleOnDelCounter: PropTypes.func.isRequired,
        handleOnResetCounter: PropTypes.func.isRequired,
    }

    onDeleteCounter = (id) => () => {
        this.props.handleOnDelCounter(id)
    }

    onIncrement = (id) => () => {
        this.props.handleOnIncrement(id)
    }

    onDecrement = (id) => () => {
        this.props.handleOnDecrement(id)
    }

    onResetCounter = (id) => () => {
        this.props.handleOnResetCounter(id)
    }

    render() {
        const { value, id } = this.props

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
                    <button
                        onClick={this.onResetCounter(id)}>Reset
                    </button>
                </div>
            </div>);
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleOnIncrement: (id) => dispatch(onIncrement(id)),
        handleOnDecrement: (id) => dispatch(onDecrement(id)),
        handleOnDelCounter: (id) => dispatch(onDeleteCounter(id)),
        handleOnResetCounter: (id) => dispatch(onResetCounter(id)),
    }
}

export default connect(null, mapDispatchToProps)(Counter)