import { combineReducers } from 'redux';
import conversationsReducer from './conversations';
import messagesReducer from './messages';
import nearbyEventsReducer from './nearby_events';
import playersReducer from './players';
import sessionReducer from './session';


export default combineReducers({
  nearby_events: nearbyEventsReducer,
  players: playersReducer,
  conversations: conversationsReducer,
  messages: messagesReducer,
  session: sessionReducer

});
