// == Import npm
import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

// == Import
// Layout
import Footer from 'src/components/Footer';
import Header from 'src/containers/Header';
// Pages
import Contact from 'src/components/Contact';
import HomeVisitor from 'src/components/HomeVisitor';
import Signin from 'src/containers/Signin';
import Team from 'src/components/Team';
import Login from 'src/containers/Login';
import Profile from 'src/containers/Profile';
import Trip from 'src/components/Trip';
import ErrorPage from 'src/components/ErrorPage';
import HomeUser from 'src/components/HomeUser';

// Data
import persons from 'src/data/teamData';

import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <div className="container">
      <Switch>
        <Route
          exact
          path="/"
          component={HomeVisitor}
        />
        <Route
          path="/contact"
          component={Contact}
        />
        <Route
          path="/qui-sommes-nous"
          render={() => <Team persons={persons} />}

        />
        <Route
          path="/signin"
          component={Signin}
        />
        <Route
          path="/login"
          component={Login}
        />
        <Route
          path="/mon-profil"
          component={Profile}
        />
        <Route
          path="/voyage/:id"
          component={Trip}
        />
        <Route
          path="/mes-voyages"
          component={HomeUser}
        />
        <Route component={ErrorPage} />
      </Switch>
    </div>
    <Footer />
  </div>
);

// == Export
export default App;
