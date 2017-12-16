import { connect } from 'react-redux';
import RegularLogin from './regular_login';
import { login } from '../actions/session';

const mapStateToProps = state => ({
  errors: state.errors.form
})

const mapDispatchToProps = dispatch => ({
  login: (user, navigateCB) => dispatch(login(user, navigateCB))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegularLogin);
