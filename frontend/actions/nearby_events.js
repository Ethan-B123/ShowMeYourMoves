import * as NearbyUtil from '../util/nearby_util';
export const RECEIVE_NEARBY_EVENTS = "RECEIVE_NEARBY_EVENTS";

const receiveNearbyEvents = nearbyEvents => ({
  type: RECEIVE_NEARBY_EVENTS,
  nearbyEvents
});

export const postEvent = eventData => dispatch => (
  NearbyUtil.postEvent(eventData).then(response => {
    return (
      dispatch(receiveNearbyEvents(response))
    )
  })
);

export const fetchEvents = location => dispatch => (
  NearbyUtil.getNearbyEvents(location).then(response => {
    return (
      dispatch(receiveNearbyEvents(response))
    )
  })
);
