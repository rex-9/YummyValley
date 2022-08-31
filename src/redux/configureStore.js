import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';

import mealXer from './meal';
import mealsXer from './meals';

const store = configureStore({
  reducer: {
    meals: mealsXer,
    meal: mealXer,
  },
  middleware: [logger, thunk],
});

export default store;
