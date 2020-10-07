import { combineReducers } from 'redux';
import alertReducer from './alerts';

export default combineReducers({
    alerts: alertReducer
});