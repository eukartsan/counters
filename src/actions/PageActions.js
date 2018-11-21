export function onIncrement(id) {
    return {
        type: 'INCREMENT',
        id
    }
}

export function onDecrement(id) {
    return {
        type: 'DECREMENT',
        id
    }
}
