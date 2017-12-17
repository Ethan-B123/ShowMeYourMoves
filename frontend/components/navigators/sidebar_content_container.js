import { connect } from 'react-redux';
import SideBarContent from './sidebar_content';
import { toArray } from '../../selectors/selectors';

const mapStateToProps = state => ({
  nearbyPlayers: toArray(state.entities.nearby_players)
})

export default connect(
  mapStateToProps,
  null
)(SideBarContent);
