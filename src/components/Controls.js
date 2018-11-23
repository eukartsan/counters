import React from 'react'
import { onAddCounter } from '../actions/PageActions'
import { connect } from 'react-redux'

class Controls extends React.Component {

    onAddCounter = (id) => (event) => {
        event.preventDefault()
        this.props.handleOnAddCounter(id)
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
            </div>


        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleOnAddCounter: (id) => dispatch(onAddCounter(id)),
    }
}

export default connect(null, mapDispatchToProps)(Controls)
