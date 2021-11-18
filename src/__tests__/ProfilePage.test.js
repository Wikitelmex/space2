import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import ProfilePage from '../Pages/ProfilePage';
import store from '../redux/store';

test('matches ProfilePage component snapshot', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <ProfilePage />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
