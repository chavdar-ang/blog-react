import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reducer from './reducer';
import alerter from './middleware/alerter';

export default function () {
    return configureStore({
      reducer,
      middleware: [
        ...getDefaultMiddleware(),
        alerter
      ],
    });
  }