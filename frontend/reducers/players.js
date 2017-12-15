// import stuff
import { RECEIVE_NEARBY_PLAYERS } from "../actions/players";

const defaultState = {};

const nearbyPlayersReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    // add cases
    case RECEIVE_NEARBY_PLAYERS:
      return action.players;
    default:
      return state;
  }
};

export default nearbyPlayersReducer;
