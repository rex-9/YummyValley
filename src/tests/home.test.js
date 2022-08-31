import {
  render, screen, act,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Home from '../pages/home/Home';
import Detail from '../pages/detail/Detail';
import { filterMeals } from '../redux/meals';
import { detailMeal } from '../redux/meal';

describe('Home page component', () => {
  afterEach(() => {
    act(() => store.dispatch(filterMeals('Pork')));
  });
  it('Check if contents of home available', async () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>,
    );
    expect(screen.getByText('Seafood')).toMatchSnapshot(); // Nav component
    expect(screen.getByText('Breakfast')).toMatchSnapshot(); // Highlight component
    expect(screen.findAllByText(/WONTONS/i)).toMatchSnapshot();
  });

  // afterEach(() => {
  //   act(() => store.dispatch(detailMeal('52885')));
  // });
  it('Check if contents of Detail available', async () => {
    render(
      <Provider store={store}>
        <Detail />
      </Provider>,
    );
    expect(screen.getByText('How to prepare')).toMatchSnapshot(); // Name of the Detail component
    expect(screen.getByText('id')).toMatchSnapshot(); // id of the Detail component
    const meal = screen.findAllByText(/instructions:/i); // Instructions of the meals
    expect(meal).toMatchSnapshot();
  });
});
