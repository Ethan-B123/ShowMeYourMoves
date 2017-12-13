import { combineReducers } from 'redux';
import formErrorsReducer from './form_errors';
import mapErrorsReducer from './map_errors';


export default combineReducers({
  form: formErrorsReducer,
  map: mapErrorsReducer

});