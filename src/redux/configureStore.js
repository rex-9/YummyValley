import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';

import mealReducer from './meal';

const store = configureStore({
  reducer: mealReducer,
  middleware: [logger, thunk],
});

export default store;
