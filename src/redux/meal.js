/* eslint-disable no-param-reassign */

import { createAsyncThunk } from '@reduxjs/toolkit';
import API from '../api';

const FILTER_MEALS = 'yummyverse/meal/FILTER_MEALS';
const DETAIL_MEAL = 'yummyverse/meal/DETAIL_MEAL';

const initialState = [];

// Meal Reducer
export default (state = initialState, action) => {
  let newState = {};
  let foundIndex = 0;
  switch (action.type) {
    case `${FILTER_MEALS}/fulfilled`:
      return [...action.payload];

    case DETAIL_MEAL:
      newState = state.find((meal) => meal.id === action.payload);
      newState = {
        ...newState,
        joined: true,
      };
      foundIndex = state.findIndex((x) => x.id === action.payload);
      state[foundIndex] = newState;
      return [...state];

    default:
      return state;
  }
};

// Action Creators

export const filterMeals = createAsyncThunk(FILTER_MEALS, async () => {
  const response = await fetch(API.mealEndPoint);
  const data = await response.json();

  const meals = data.map((meal) => ({
    id: meal.meal_id,
    name: meal.meal_name,
    description: meal.description,
    joined: false,
  }));

  return meals;
});

export const detailMeal = (id) => ({
  type: DETAIL_MEAL,
  payload: id,
});
