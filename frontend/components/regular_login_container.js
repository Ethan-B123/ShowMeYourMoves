import { connect } from 'react-redux';
import RegularLogin from './regular_login';
import { login, removeFormErrors } from '../actions/session';

const mapStateToProps = state => ({
  errors: state.errors.form
})

const mapDispatchToProps = dispatch => ({
  login: (user, navigateCB) => dispatch(login(user, navigateCB)),
  removeFormErrors: () => dispatch(removeFormErrors())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegularLogin);
