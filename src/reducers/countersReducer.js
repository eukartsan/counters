export const initialState = {
    data: [
        {id: 1, value: 11},
        {id: 2, value: 22},
        {id: 3, value: 33}
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

