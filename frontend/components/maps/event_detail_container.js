
import { connect } from "react-redux";
import EventDetail from "./event_detail";

const mapStateToProps = ({ entities }) => {
  return ({
    nearbyEvents: entities.nearby_events,
    nearbyPlayers: entities.nearby_players
  })
}

export default connect(mapStateToProps, null)(EventDetail)
