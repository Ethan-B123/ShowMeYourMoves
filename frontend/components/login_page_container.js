import { connect } from 'react-redux';
import LoginPage from './login_page';
import * as SessionUtil from '../util/session'
import { register, login } from '../actions/session';

const mapDispatchToProps = dispatch => ({
  register: user => dispatch(register(user)),
  login: user => dispatch(login(user))
})

export default connect(
  null,
  mapDispatchToProps
)(LoginPage);
