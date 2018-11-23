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
        case 'DELETE': {
            const items = state.data.filter(({id}) => id !== action.payload.id);
            return {...state, items};
        }

        // {
        //     const items = state.data.filter(({ id }) => id !== action.payload.id);
        //     return { ...state, items };
        // }

        default:
            return state
    }
}