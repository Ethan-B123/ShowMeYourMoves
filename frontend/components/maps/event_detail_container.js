
import { connect } from "react-redux";
import EventDetail from "./event_detail";

const mapStateToProps = ({ entities, session }) => {
  return ({
    nearbyEvents: entities.nearby_events,
    nearbyPlayers: entities.nearby_players,
    currentUser: session.currentUser
  })
}

export default connect(mapStateToProps, null)(EventDetail)
