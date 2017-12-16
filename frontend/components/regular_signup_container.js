import { connect } from 'react-redux';
import RegularSignup from './regular_signup';
import { register, removeFormErrors } from '../actions/session';

const mapStateToProps = state => ({
  errors: state.errors.form
})

const mapDispatchToProps = dispatch => ({
  register: (user, navigateCB) => dispatch(register(user, navigateCB)),
  removeFormErrors: () => dispatch(removeFormErrors())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegularSignup);
