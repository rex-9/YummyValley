import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';

import categoriesXer from './categories';
import mealsXer from './meals';
import mealXer from './meal';

const store = configureStore({
  reducer: {
    categories: categoriesXer,
    meals: mealsXer,
    meal: mealXer,
  },
  middleware: [logger, thunk],
});

export default store;
