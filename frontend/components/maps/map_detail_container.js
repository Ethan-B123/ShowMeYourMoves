import { connect } from 'react-redux';
import MapDetailBottom from "./map_detail_bottom";

const mapStateToProps = ({ entities }) => {
  return ({
    nearbyEvents: entities.nearby_events,
    nearbyPlayers: entities.nearby_players
  })
}

export default connect(
  mapStateToProps,
  null
)(MapDetailBottom);
