import { combineReducers } from 'redux';
import alertReducer from './alerts';

export default combineReducers({
    alert: alertReducer
});