import { connect } from 'react-redux';
import RegularSignup from './regular_signup';
import { register } from '../actions/session';

const mapDispatchToProps = dispatch => ({
  register: user => dispatch(register(user))
})

export default connect(
  null,
  mapDispatchToProps
)(RegularSignup);
