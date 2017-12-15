import * as MAPUtil from '../util/map_util';
export const RECEIVE_NEARBY_PLAYERS = "RECEIVE_NEARBY_PLAYERS";

const receiveNearbyPlayers = players => ({
  type: RECEIVE_NEARBY_PLAYERS,
  players
});

export const fetchPlayers = location => dispatch => (
  MAPUtil.getNearbyPlayers(location).then(response => {
    // TODO format response for action
    debugger
    return(
      dispatch(receiveNearbyPlayers(response))
    )
  })
);
