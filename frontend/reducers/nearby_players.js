// import stuff
import { RECEIVE_NEARBY_PLAYERS } from "../actions/nearby_players";

const defaultState = {};

const nearbyPlayersReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    // add cases
    case RECEIVE_NEARBY_PLAYERS:
      return action.nearbyPlayers;
    default:
      return state;
  }
};

export default nearbyPlayersReducer;
