import { configureStore } from "@reduxjs/toolkit";

export const TYPES = {
  INCREMENT_COUNTER: "INCREMENT_COUNTER",
  DECREMENT_COUNTER: "DECREMENT_COUNTER"
};

const defaultState = {
  counter: 0
};

const counterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case TYPES.INCREMENT_COUNTER:
      return { ...state, counter: state.counter + 1 };
    case TYPES.DECREMENT_COUNTER:
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};

const rootReducer = {
  counterReducer
};

const store = configureStore({ reducer: rootReducer });

export default store;
