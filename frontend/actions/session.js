import * as APIUtil from '../util/session';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

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

export const register = formUser => dispatch => (
  APIUtil.postUser(formUser).then(
    user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveCurrentUser(errors))
  )
);

export const login = formUser => dispatch => (
  APIUtil.postSession(formUser).then(
    user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveCurrentUser(errors))
  )
);

export const logout = () => dispatch => (
  APIUtil.deleteSession().then(() => 
    dispatch(logoutCurrentUser())
  )
);

export const update = formUser => dispatch => (
  APIUtil.updateUser(formUser).then(user => (
    dispatch(receiveCurrentUser(user))
  ))
);

