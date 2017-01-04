'use strict';

import React from 'react';
// import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'

// import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from './actions'

import todoApp from './reducers/todos'

let store = createStore(todoApp)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('target')
)

// Log the initial state

console.log(store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
// let unsubscribe = store.subscribe(() =>
//     console.log(store.getState())
// );


// store.dispatch(addTodo('Learn about actions'));
// store.dispatch(addTodo('Learn about reducers'));
// store.dispatch(addTodo('Learn about store'));
// store.dispatch(toggleTodo(0));
// store.dispatch(toggleTodo(1));
// store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));
// store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE));
// store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ALL));
// 
// unsubscribe();



// ReactDOM.render(
//       <h1>Hello, world!</h1>,
//         document.getElementById('target')
// );
// 



// unsubscribe();
