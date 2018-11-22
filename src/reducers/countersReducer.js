

export function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT': {
            const id = action.id;
            const todoItem = {
                value: action.payload.value + 1,
                id,
            };

            return {...state, data: [...state.data, todoItem]};
        }
        case 'DECREMENT':
            return state - 1
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