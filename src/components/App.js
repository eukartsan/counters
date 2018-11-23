import React from 'react'
import Counter from './Counter'
import './App.css'
import Controls from './Controls'
import { connect } from 'react-redux'

class App extends React.Component {
    render() {
        const { dataCounters } = this.props
        return (
            <div>
                {dataCounters.map(counter => (
                    <Counter
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

export default connect(mapStateToProps, null)(App)