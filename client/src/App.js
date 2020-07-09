import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Home from './pages/home'
import NewContact from './pages/newContact'
import EditContact from './pages/editContact'
import Navbar from './components/navbar'

function App() {
  return (
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
  );
}

export default App;
