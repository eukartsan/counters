const component = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_ITEM':
      return state.map(t =>
        todo(t, action)
      )
    default:
      return state
  }
}

export default component
