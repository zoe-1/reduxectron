import { combineReducers } from 'redux'
import todos from './todos'

// import visibilityFilter from './visibilityFilter'
// const todoApp = combineReducers({
//       todos,
//         visibilityFilter
// })

const todoApp = combineReducers({
    todos
});

export default todoApp
