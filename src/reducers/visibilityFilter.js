import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Counter from '../components/Counter'

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.component, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

export default VisibleTodoList
