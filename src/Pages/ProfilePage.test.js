import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import ProfilePage from './ProfilePage';

import store from '../redux/store';

afterEach(cleanup);

it('renders profile page with redux', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <ProfilePage />
    </Provider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
