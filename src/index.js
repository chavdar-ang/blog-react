import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import configureStore from './store/configureStore';

// import { addAlert } from './store/alerts';

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


// store.dispatch(addAlert({ message: 'test', alertType: 'warning' }));