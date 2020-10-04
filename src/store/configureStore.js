import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import reducer from './reducer';

// const middleware = [thunk];

export default function () {
    return configureStore({
      reducer,
      middleware: [thunk]
    //   middleware: [
    //     ...getDefaultMiddleware()
    //   ],
    });
  }