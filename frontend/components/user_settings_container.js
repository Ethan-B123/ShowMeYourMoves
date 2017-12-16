import { connect } from 'react-redux';
import UserSettings from './user_settings';
import { update } from '../actions/session';

const mapStateToProps = state => ({
  display_name: state.session.display_name,
  email: state.session.email,
  description: state.session.description,
  main: state.session.main,
  game: state.session.game,
  pronouns: state.session.pronouns,
  age: state.session.age
});

const mapDispatchToProps = dispatch => ({
  update: user => dispatch(update(user))
});

export default connect(
  null,
  mapDispatchToProps
)(UserSettings);
