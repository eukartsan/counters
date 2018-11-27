import React from 'react'
import Counter from './Counter'
import './App.css'
import Controls from './Controls'
import { connect } from 'react-redux'
import PropTypes from "prop-types";

class App extends React.Component {
    render() {
        const { dataCounters } = this.props
        return (
            <div>
                {dataCounters.map(counter => (
                    <Counter
                        key={counter.id}
                        id={counter.id}
                        value={counter.value}
                    />))}
                <Controls />
            </div>)
    }
}

function mapStateToProps(state) {
    return {
        dataCounters: state.data
    };
}

App.propTypes = {
    dataCounters: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
    }).isRequired)
}

export default connect(mapStateToProps, null)(App)

