import {
  render, screen,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Categories from '../pages/categories/Categories';
import Nav from '../components/nav/Nav';

describe('Categories page component', () => {
  it('Check if Categories page available', async () => {
    render(
      <Provider store={store}>
        <Categories />
      </Provider>,
    );
    expect(screen.getByText('😋 Yummy Valley ✨')).toMatchSnapshot(); // Categories Page
  });
  it('Check if Meals page available', async () => {
    render(
      <Provider store={store}>
        <Nav />
      </Provider>,
    );
    expect(screen.getByAltText(/mic/i)).toMatchSnapshot(); // Meals Page
  });
  it('Check if Detail page available', async () => {
    render(
      <Provider store={store}>
        <Nav />
      </Provider>,
    );
    expect(screen.getByAltText(/setting/i)).toMatchSnapshot(); // Details Page
  });
});
