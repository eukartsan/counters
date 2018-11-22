import uuidv4 from 'uuid/v4';

export const onIncrement = (id) => ({
    type: 'INCREMENT',
    id,
})


export const onDecrement = (id) => {
    return {
        type: 'DECREMENT',
        id
    }
}
