import { createAsyncThunk } from '@reduxjs/toolkit';
import API from '../api';

const FILTER_MEALS = 'yummyvalley/meals/FILTER_MEALS';

const initialState = [];

const mealsXer = (state = initialState, action) => {
  switch (action.type) {
    case `${FILTER_MEALS}/fulfilled`:
      return [...action.payload];

    default:
      return state;
  }
};

const filterMeals = createAsyncThunk(FILTER_MEALS, async (cateName) => {
  const response = await fetch(API.filter(cateName));
  const data = await response.json();
  const meals = data.meals.map((meal) => ({
    name: meal.strMeal,
    thumb: meal.strMealThumb,
    id: meal.idMeal,
  }));
  return meals;
});

export default mealsXer;
export { filterMeals };
