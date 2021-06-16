import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Navigation from './components/navigation';


const App = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        {/* render Home Component when we hit /home */}
        <Route exact path="/home">
          <Home />
        </Route>

        {/* render Login Component when we hit /login */}
        <Route exact path="/login">
          <Login />
        </Route>

        {/* render Register Component when we hit /register */}
        <Route exact path="/register">
          <Register />
        </Route>

      </Switch>
    </Router>

  );
};

export default App;
