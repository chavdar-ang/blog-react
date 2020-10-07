import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { addAlert } from './store/alerts';

import configureStore from './store/configureStore';

const store = configureStore();


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

store.dispatch({
  type: "alert",
  payload: {
    alertType: "warning",
    message: "Test warning message"
  }
});

// store.dispatch(addAlert({ message: 'test message 1', alertType: 'success' }));
// store.dispatch(addAlert({ message: 'test message 1', alertType: 'success' }));