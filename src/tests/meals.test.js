import {
  render, screen, act,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Home from '../pages/home/Home';
import { filterMeals } from '../redux/meals';

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
    expect(screen.findAllByText(/WONTONS/i)).toMatchSnapshot(); // Meals
  });
});
