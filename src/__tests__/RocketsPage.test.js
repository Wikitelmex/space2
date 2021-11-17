import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import RocketsPage from '../Pages/RocketsPage';
import store from '../redux/store';

test('matches ProfilePage component snapshot', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <RocketsPage />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});