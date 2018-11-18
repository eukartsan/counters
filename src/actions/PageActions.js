export function onIncrement(value, id) {
    return {
        type: 'INCREMENT',
        payload: value,
        id
    }
}


export function onDecrement(value, id) {
    return {
        type: 'DECREMENT',
        payload: value,
        id
    }
}
