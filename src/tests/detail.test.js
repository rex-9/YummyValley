import {
  render, screen, act, waitFor,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Detail from '../pages/detail/Detail';
import { detailMeal } from '../redux/meal';

describe('Detail page component', () => {
  afterEach(() => {
    act(() => store.dispatch(detailMeal(52885)));
  });
  it('Check if contents of Detail available', async () => {
    render(
      <Provider store={store}>
        <Detail />
      </Provider>,
    );
    await waitFor(() => expect(screen.getByText('How to prepare')).toMatchSnapshot()); // Name of the Detail component
    await waitFor(() => expect(screen.getByText('id')).toMatchSnapshot()); // id of the Detail component
    await waitFor(() => expect(screen.findAllByText(/instructions:/i)).toMatchSnapshot()); // data of the Detail component
  });
});
