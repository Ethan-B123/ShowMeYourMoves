import { connect } from 'react-redux';
import { toArray } from "../../selectors/selectors";
import Map from "./map";

const mapStateToProps = ({ entities }) => {
  return ({
    nearbyEvents: toArray(entities.nearby_events),
    nearbyPlayers: toArray(entities.nearby_players)
  })
}

export default connect(
  mapStateToProps,
  null
)(Map);
