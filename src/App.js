
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './Navbar';
import Home from './Home';
import Coffee from './Coffee';
import CaramelIced from './CaramelIced';
import NoPage from './NoPage';


function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='content'>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/coffee'>
              <Coffee />
            </Route>
            <Route exact path='/caramel/'>
              <CaramelIced />
            </Route>
            <Route path='/404'>
              <NoPage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router >
  );
}

export default App;

