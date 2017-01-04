import { combineReducers } from 'redux'
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from '../actions'
const { SHOW_ALL } = VisibilityFilters

function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

let itemCount = 0;

const todo = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: itemCount++, // undefined
                text: action.text,
                completed: false
            }
        case 'TOGGLE_TODO':

            // console.log('TOGGLE_TODO state: ' + JSON.stringify(state));
            // console.log('TOGGLE_TODO action ' + JSON.stringify(action));

            if (state.id !== action.index) {
                // d/n change anything not target object.
                return state
            }

            return Object.assign({}, state, {
                completed: !state.completed     // toggle state.
            })

        default:
            return state
    }
}

const todos = (state = [], action) => {

    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)
            ]
        case 'TOGGLE_TODO':
            return state.map(t =>
                todo(t, action)
            )
        default:
            return state
    }
}

const todoApp = combineReducers({
    visibilityFilter,
    todos
});


export default todoApp
