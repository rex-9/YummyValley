import { createAsyncThunk } from '@reduxjs/toolkit';
import API from '../api';

const FETCH_CATEGORIES = 'yummyvalley/meals/FETCH_CATEGORIES';

const initialState = [];

const categoriesXer = (state = initialState, action) => {
  switch (action.type) {
    case `${FETCH_CATEGORIES}/fulfilled`:
      return [...action.payload];

    default:
      return state;
  }
};

const fetchCategories = createAsyncThunk(FETCH_CATEGORIES, async () => {
  const response = await fetch(API.categoriesEndPoint);
  const data = await response.json();
  const categories = data.categories.map((category) => ({
    name: category.strCategory,
    thumb: category.strCategoryThumb,
    id: category.idCategory,
  }));
  return categories;
});

export default categoriesXer;
export { fetchCategories };
