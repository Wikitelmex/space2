import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import ProfilePage from './Pages/ProfilePage';
import RocketsPage from './Pages/RocketsPage';
import MissionsPage from './Pages/MissionsPage';

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
