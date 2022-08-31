import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';

import mealXer from './meal';

const store = configureStore({
  reducer: {
    meals: mealXer,
  },
  middleware: [logger, thunk],
});

export default store;
