import React from 'react'
import {Provider} from 'react-redux'
import Counters from './Counters';
import {createStore} from 'redux'
import App from './App'

const initialState = {
  value: 0
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'INCREMENT':
    return {
      value: state.value + 1
    };
    case 'DECREMENT':
      return {
        value: state.value - 1
      };
    default:
      return state;
  }
}

let store = createStore(reducer);

const Main = () => (
  <Provider store={store}>
    <App/>
  </Provider>
//  <App />
)

export default Main
