import { connect } from 'react-redux';
import LoginPage from './login_page';
import { register } from '../actions/session';

const mapDispatchToProps = dispatch => ({
  register: user => dispatch(register(user))
})

export default connect(
  null,
  mapDispatchToProps
)(LoginPage);
