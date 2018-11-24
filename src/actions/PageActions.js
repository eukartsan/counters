import {INCREMENT, DECREMENT, ADD, DELETE, RESET, ALL_RESET} from './actionTypes'

export const onIncrement = (id) => ({
    type: INCREMENT,
    id,
})

export const onDecrement = (id) => ({
    type: DECREMENT,
    id,
})

export const onAddCounter = (id) => ({
    type: ADD,
    id,
})

export const onDeleteCounter = (id) => ({
    type: DELETE,
    id,
})

export const onResetCounter = (id) => ({
    type: RESET,
    id,
})

export const onAllResetCounter = (id) => ({
    type: ALL_RESET,
    id,
})