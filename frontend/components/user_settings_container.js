import { connect } from 'react-redux';
import UserSettings from './user_settings';
import { update, logout } from '../actions/session';

const mapStateToProps = state => ({
  display_name: state.session.currentUser.display_name,
  email: state.session.currentUser.email,
  description: state.session.currentUser.description,
  main: state.session.currentUser.main,
  game: state.session.currentUser.game,
  pronouns: state.session.currentUser.pronouns,
  age: state.session.currentUser.age,
  id: state.session.currentUser.id,
  image_url: state.session.currentUser.image_url,
  contact_info: state.session.currentUser.contact_info
});

const mapDispatchToProps = dispatch => ({
  update: user => dispatch(update(user)),
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserSettings);
