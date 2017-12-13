import { connect } from 'react-redux';
import Map from "./map";

const mapStateToProps = ({ enitites }) => ({
  nearbyEvents: enitites.nearby_events,
  nearbyPlayers: enitites.nearby_players
})

export default connect(
  mapStateToProps,
  null
)(Map);
