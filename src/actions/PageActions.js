export function onIncrement(id) {
    return {
        type: 'INCREMENT',
        id
    }
}

export function onDecrement(value) {
    return {
        type: 'DECREMENT',
        payload: value,
    }
}
