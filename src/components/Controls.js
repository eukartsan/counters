import React from 'react'
import PropTypes from 'prop-types'
import { onAddCounter, onAllResetCounter } from '../actions/PageActions'
import { connect } from 'react-redux'

class Controls extends React.Component {
    static propTypes = {
        handleOnAddCounter: PropTypes.func.isRequired,
        handleOnAllResetCounter: PropTypes.func.isRequired,
    }

    onAddCounter = (id) => (event) => {
        event.preventDefault()
        this.props.handleOnAddCounter(id)
    }

    onAllResetCounter = (id) => () => {
        this.props.handleOnAllResetCounter(id)
    }

    render() {
        const { id } = this.props;

        return (
            <div>
                <form onSubmit={this.onAddCounter(id)}>
                    <input
                        type="submit"
                        value="Add counter" />
                </form>
                <button
                onClick={this.onAllResetCounter(id)}>
                    All Reset
                </button>
            </div>

        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleOnAddCounter: (id) => dispatch(onAddCounter(id)),
        handleOnAllResetCounter: (id) => dispatch(onAllResetCounter(id)),
    }
}

export default connect(null, mapDispatchToProps)(Controls)
