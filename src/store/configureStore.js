import React from 'react'
import {createStore} from 'redux'
import uuidv4 from 'uuid/v4';
import {reducer} from '../reducers/countersReducer'

export const initialState = {
    data: [
        {id: uuidv4(), value: 1},
        {id: uuidv4(), value: 3},
        {id: uuidv4(), value: 3},
    ]
};

export const store = createStore(reducer, initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);