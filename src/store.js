import { createStore } from 'redux';

const initialState = {
  count: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export const storeInstance = createStore(reducer);
