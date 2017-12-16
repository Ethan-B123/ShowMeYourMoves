import * as APIUtil from '../util/session';

export const RECEIVE_FORM_ERRORS = "RECEIVE_FORM_ERRORS";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const REMOVE_FORM_ERRORS = "REMOVE_FORM_ERRORS";

export const removeFormErrors = () => ({
  type: REMOVE_FORM_ERRORS
})

const receiveFormErrors = errors => ({
  type: RECEIVE_FORM_ERRORS,
  errors
})

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const register = (formUser, navigateCB) => dispatch => (
  APIUtil.postUser(formUser).then(
    user => {
      dispatch(receiveCurrentUser(user));
      navigateCB();
    },
    errors => dispatch(receiveFormErrors(errors))
  )
);

export const login = (formUser, navigateCB) => dispatch => (
  APIUtil.postSession(formUser).then(
    user => {
      dispatch(receiveCurrentUser(user));
      navigateCB();
    },
    errors => dispatch(receiveFormErrors(errors))
  )
);

export const logout = () => dispatch => (
  APIUtil.deleteSession().then(() =>
    dispatch(logoutCurrentUser())
  )
);
