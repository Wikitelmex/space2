import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import MissionsPage from '../Pages/MissionsPage';

import store from '../redux/store';

afterEach(cleanup);

it('renders mission page with redux', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <MissionsPage />
    </Provider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
