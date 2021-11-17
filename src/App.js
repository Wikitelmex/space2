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
// import FetchLoaderComponent from './Components/FetchLoaderComponent';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <br />
        <br />
        <br />
        <div>
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
