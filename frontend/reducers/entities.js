import { combineReducers } from 'redux';
import conversationsReducer from './conversations';
import messagesReducer from './messages';
import nearbyEventsReducer from './nearby_events';
import nearbyPlayersReducer from './nearby_players';
import sessionReducer from './session';


export default combineReducers({
  nearby_events: nearbyEventsReducer,
  nearby_player: nearbyPlayersReducer,
  conversations: conversationsReducer,
  messages: messagesReducer,
  session: sessionReducer

});
