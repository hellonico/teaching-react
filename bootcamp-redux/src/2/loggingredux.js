// import { combineReducers, createStore } from 'redux';

import { createStore, combineReducers, applyMiddleware } from 'redux'

const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

// actions.js
export const activateGeod = geod => ({
  type: 'ACTIVATE_GEOD',
  geod,
});

export const closeGeod = () => ({
  type: 'CLOSE_GEOD',
});

// reducers.js
export const geod = (state = {}, action) => {
  switch (action.type) {
    case 'ACTIVATE_GEOD':
      return action.geod;
    case 'CLOSE_GEOD':
      return {};
    default:
      return state;
  }
};

export const reducers = combineReducers({
  geod,
});

// store.js
export function configureStore(initialState = {}) {
  const store = createStore(reducers, initialState,applyMiddleware(logger));
  return store;
}

export const store = configureStore();
