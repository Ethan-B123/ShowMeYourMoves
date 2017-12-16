import { RECEIVE_FORM_ERRORS } from

const defaultState = [];

const formErrorsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    // add cases

    default:
      return state;
  }
};

export default formErrorsReducer;
