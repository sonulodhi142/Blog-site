import { createStore } from 'redux';

// Define action types
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// Define action creators
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });

// Define the initial state
const initialState = { count: 0 };

// Define the reducer
function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

// Create the Redux store
const store = createStore(counterReducer);

export default store;