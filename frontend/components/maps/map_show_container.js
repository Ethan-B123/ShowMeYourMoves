import { connect } from 'react-redux';
import MapShowPage from "./map_show_page";
import * as NearbyPlayerActions from "./../../actions/nearby_players";

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchPlayers: (location) => dispatch(
      NearbyPlayerActions.fetchPlayers(location)
    )
  })
}

export default connect(
  null,
  mapDispatchToProps
)(MapShowPage);
