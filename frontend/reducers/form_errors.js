import { RECEIVE_FORM_ERRORS, REMOVE_FORM_ERRORS } from '../actions/session';

const defaultState = [];

const formErrorsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_FORM_ERRORS:
      return action.errors;
    case REMOVE_FORM_ERRORS:
      return [];
    default:
      return state;
  }
};

export default formErrorsReducer;
