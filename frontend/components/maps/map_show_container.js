import { connect } from 'react-redux';
import MapShowPage from "./map_show_page";
import PlayerActions from "./../../actions/players";

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchPlayers: (location) => dispatch(
      PlayerActions.fetchPlayers(location.coords)
    )
  })
}

export default connect(
  null,
  mapDispatchToProps
)(MapShowPage);
