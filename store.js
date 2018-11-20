import { createStore, combineReducers } from 'redux/src/index';

// TYPES
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const SEX = 'SEX';

// Action Creators
export function IncrementActionCreator() {
  return {
    type: INCREMENT,
  };
}

export function DecrementActionCreator() {
  return {
    type: DECREMENT,
  };
}

export function SexActionCreator(sex) {
  return {
    type: SEX,
    payload: sex,
  };
}
// reducer
export function numReducer(state = {}, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        num: state.num + 1,
      };
    case 'DECREMENT':
      return {
        num: state.num - 1,
      };
    default:
      return state;
  }
}

export function sexReducer(state = {}, action) {
  switch (action.type) {
    case 'SEX':
      return {
        girlOrBoy: action.payload,
      };
    default:
      return state;
  }
}

const reducers = combineReducers({ numReducer, sexReducer });
export default createStore(reducers, {
  numReducer: {
    num: 0,
  },
  sexReducer: {
    girlOrBoy: 0,
  },
});
