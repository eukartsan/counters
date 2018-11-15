import { combineReducers } from 'redux'
import component from './component'
import visibilityFilter from './visibilityFilter'

const ComponentsApp = combineReducers({
  component,
  visibilityFilter
})

export default todoApp
