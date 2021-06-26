import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './Components/Home/Home';
import WriteBlog from './Components/WriteBlog/WriteBlog';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReadFullBlog from './Components/ReadFullBlog/ReadFullBlog'
import ManageBlog from "./Components/ManageBlog/ManageBlog";
import AddAdmin from "./Components/AddAdmin/AddAdmin"


function App() {
  return (
    <Router>
      <Switch>

          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/writeBlog">
            <WriteBlog />
          </Route>
          <Route path="/readFullBlog/:id">
            <ReadFullBlog />
          </Route>
          <Route path="/manageBlog">
            <ManageBlog />
          </Route>
          <Route path="/addAdmin">
            <AddAdmin />
          </Route>

      </Switch>
    </Router>
  );
}

export default App;
