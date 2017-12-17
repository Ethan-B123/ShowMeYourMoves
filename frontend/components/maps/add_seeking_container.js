import { connect } from 'react-redux';
import AddHostingForm from './add_seeking_form';
import { postPlayer } from '../../actions/nearby_players';

// const mapStateToProps = state => ({
//   display_name: state.session.currentUser.display_name,
//   email: state.session.currentUser.email,
//   description: state.session.currentUser.description,
//   main: state.session.currentUser.main,
//   game: state.session.currentUser.game,
//   pronouns: state.session.currentUser.pronouns,
//   age: state.session.currentUser.age,
//   id: state.session.currentUser.id,
//   image_url: state.session.currentUser.image_url
// });

const mapDispatchToProps = dispatch => ({
  postPlayer: eventData => dispatch(postPlayer(eventData))
});

export default connect(
  null,
  mapDispatchToProps
)(AddHostingForm);
