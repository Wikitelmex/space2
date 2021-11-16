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
import FetchLoaderComponent from './Components/FetchLoaderComponent';

function App() {
  return (
    <Provider store={store}>
      <FetchLoaderComponent />
      <Router>
        <Navbar />
        <div className="App">
          <p>Space App</p>
        </div>
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
      </Router>
    </Provider>
  );
}

export default App;
