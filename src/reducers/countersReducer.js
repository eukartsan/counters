import uuidv4 from 'uuid/v4';

export const initialState = {
    data: [
        {id: uuidv4(), value: 1},
        {id: uuidv4(), value: 3},
        {id: uuidv4(), value: 2},
        {id: uuidv4(), value: 2},
    ]
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case 'INCREMENT': {
            const dataCopy = [...state.data]
            const data = dataCopy.map((counter) => {
                if (counter.id === action.id) {
                    counter.value = counter.value + 1
                }
                return counter
            })
            return {...state, data}
        }
        case 'DECREMENT': {
            const dataCopy = [...state.data]
            const data = dataCopy.map((counter) => {
                if (counter.id === action.id) {
                    counter.value = counter.value - 1
                }
                return counter
            })
            return {...state, data}
        }
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