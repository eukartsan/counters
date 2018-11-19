export const initialState = {
    data: [
        {id: 1, value: 11},
        {id: 2, value: 22},
        {id: 3, value: 33},
    ]
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state
        case 'DECREMENT':
            return state
        default:
            return state
    }
}


// this.props.dataCounters.map(counter => (
//     <Counters
//         value={counter.value}
//         incrementCounter={this.props.incrementCounter}
//         decrementCounter={this.props.decrementCounter}
//         key={counter.id}/>))

// if (action.id === 1)
//     state.data.map(counter => (
//         console.log(counter.value + 1, counter.id)
//     ))