import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Navbar from "./Navbar";
import Home from "./Home";
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import Edit from './Edit';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">

          
        <Switch>

          <Route exact path="/">
            <Home/>
          </Route>

          <Route exact path="/create">
            <Create/>
          </Route>

          <Route exact path="/blogs/:id">
            <BlogDetails/>
          </Route>

          <Route exact path="/edit/:id">
          <Edit />
           </Route>

          <Route exact path="*">
            <NotFound/>
          </Route>


         


        </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
