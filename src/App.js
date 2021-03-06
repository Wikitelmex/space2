import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';

import { Provider } from 'react-redux';
import store from './redux/store';

import Navbar from './Components/Navbar';
import ProfilePage from './Pages/ProfilePage';
import RocketsPage from './Pages/RocketsPage';
import MissionsPage from './Pages/MissionsPage';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <br />
        <br />
        <br />
        <div data-testid="navBar">
          <Switch>
            <Route exact path="/">
              <ProfilePage />
            </Route>
            <Route path="/rockets">
              <RocketsPage />
            </Route>
            <Route path="/missions">
              <MissionsPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
