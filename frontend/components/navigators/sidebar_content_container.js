import { connect } from 'react-redux';
import SideBarContent from './sidebar_content';
import { toArray } from '../../selectors/selectors';

const mapStateToProps = state => ({
  nearbyPlayers: toArray(state.entities.nearby_players),
  nearbyEvents: toArray(state.entities.nearby_events),
  currentUser: state.session.currentUser
})

export default connect(
  mapStateToProps,
  null
)(SideBarContent);
