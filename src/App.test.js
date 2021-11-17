import { render, screen, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../src/redux/store';
import App from './App';

afterEach(cleanup);

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByTestId("navBar");
  expect(linkElement).toBeInTheDocument();
});

it("renders App page with redux", () => {
  const { asFragment } = render(
    <Provider store={store}>
      <App />
    </Provider>);
  expect(asFragment()).toMatchSnapshot();
});

