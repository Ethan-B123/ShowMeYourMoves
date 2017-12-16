import { connect } from 'react-redux';
import MapShowPage from "./map_show_page";
import * as NearbyPlayerActions from "./../../actions/nearby_players";
import * as NearbyEventsActions from "./../../actions/nearby_events";

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchPlayers: (location) => dispatch(
      NearbyPlayerActions.fetchPlayers(location)
    ),
    fetchEvents: (location) => dispatch(
      NearbyEventsActions.fetchEvents(location)
    )
  })
}

export default connect(
  null,
  mapDispatchToProps
)(MapShowPage);
