import * as NearbyUtil from '../util/nearby_util';
export const RECEIVE_NEARBY_PLAYERS = "RECEIVE_NEARBY_PLAYERS";

const receiveNearbyPlayers = nearbyPlayers => ({
  type: RECEIVE_NEARBY_PLAYERS,
  nearbyPlayers
});

export const postPlayer = location => dispatch => (
  NearbyUtil.postPlayer(location).then(response => {
    return (
      dispatch(receiveNearbyPlayers(response))
    )
  })
);

export const fetchPlayers = location => dispatch => (
  NearbyUtil.getNearbyPlayers(location).then(response => {
    return (
      dispatch(receiveNearbyPlayers(response))
    )
  })
);
