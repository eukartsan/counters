import uuidv4 from 'uuid/v4'

export const initialState = {
    data: [
        { id: uuidv4(), value: 0 },
        { id: uuidv4(), value: 0 },
        { id: uuidv4(), value: 0 },
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
            return { ...state, data }
        }
        case 'DECREMENT': {
            const dataCopy = [...state.data]
            const data = dataCopy.map((counter) => {
                if (counter.id === action.id) {
                    counter.value = counter.value - 1
                }
                return counter
            })
            return { ...state, data }
        }
        case 'ADD': {
            const newCounter = {
                id: uuidv4(),
                value: 0
            }
            const data = [...state.data, newCounter]
            return { ...state, data }
        }

        case 'DELETE': {
            const data = state.data.filter((counter) => counter.id !== action.id)
            return { ...state, data }
        }

        default:
            return state
    }
}