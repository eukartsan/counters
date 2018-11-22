let nextTodoId = 0

export const onIncrement = (value) => ({
        type: 'INCREMENT',
        id: nextTodoId++,
        value
})



export const onDecrement = (id) => {
    return {
        type: 'DECREMENT',
        id
    }
}
