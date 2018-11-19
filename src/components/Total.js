import React from 'react';

export default class Total extends React.Component {

    addCounterName = (event) => {
        const {addCounter} = this.props
        addCounter(addCounter)
        event.preventDefault();
    }

    render() {

        return (
            <div>
                <form onSubmit={this.addCounterName}>
                    <input
                        type="submit"
                        value="Add counter"/>
                </form>
            </div>
        );
    }
}
