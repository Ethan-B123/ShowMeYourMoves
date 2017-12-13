import { connect } from 'react-redux';
import RegularLogin from './regular_login';
import { login } from '../actions/session';

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user))
})

export default connect(
  null,
  mapDispatchToProps
)(RegularLogin);
