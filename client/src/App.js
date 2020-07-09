import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import {Provider} from 'react-redux'
import store from './store/index';

import Home from './pages/home'
import NewContact from './pages/newContact'
import EditContact from './pages/editContact'
import Navbar from './components/navbar'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/edit/:contactId'>
            <EditContact />
          </Route>
          <Route path='/new'>
            <NewContact />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
