import React from 'react'
import {createStore} from 'redux'
import {reducer, initialState} from '../reducers/countersReducer'

export const store = createStore(reducer, initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);