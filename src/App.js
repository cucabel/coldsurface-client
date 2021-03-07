import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

// Pages
import Landing from './pages/Landing/Landing';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import Week from './pages/Dashboard/Week';
import Sentiment from './pages/Dashboard/Sentiment';
import Channel from './pages/Dashboard/Channel';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Private from './pages/Private/Private';

// Components
import Navbar from './components/Navbar/Navbar';
import AnonRoute from './components/AnonRoute/AnonRoute';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />

        <Switch>
          <Route exact path="/" component={Landing} />

          <AnonRoute exact path="/signup" component={Signup} />
          <AnonRoute exact path="/login" component={Login} />

          <PrivateRoute exact path="/private" component={Private} />
          <PrivateRoute exact path="/home" component={Home} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <PrivateRoute exact path="/week" component={Week} />
          <PrivateRoute exact path="/channel" component={Channel} />
          <PrivateRoute exact path="/sentiment" component={Sentiment} />
        </Switch>
      </div>
    );
  }
}

export default App;

/*          <Route exact path="/" component={Home} />
*/
