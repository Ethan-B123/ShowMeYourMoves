// import stuff
import { RECEIVE_NEARBY_EVENTS } from "../actions/nearby_events";

const defaultState = {};

const nearbyEventsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    // add cases
    case RECEIVE_NEARBY_EVENTS:
      return action.nearbyPlayers;
    default:
      return state;
  }
};

export default nearbyEventsReducer;
