import { connect } from 'react-redux';
import LoginPage from './login_page';
import * as SessionUtil from '../util/session'
import { register, login } from '../actions/session';

const mapDispatchToProps = dispatch => ({
  register: (user, navigateCB) => dispatch(register(user, navigateCB)),
  login: (user, navigateCB, registerCB) => dispatch(login(user, navigateCB, registerCB))
})

export default connect(
  null,
  mapDispatchToProps
)(LoginPage);
