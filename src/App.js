import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import './App.css';
import Home from './Components/Home/Home';
import WriteBlog from './Components/WriteBlog/WriteBlog';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReadFullBlog from './Components/ReadFullBlog/ReadFullBlog'
import ManageBlog from "./Components/ManageBlog/ManageBlog";
import AddAdmin from "./Components/AddAdmin/AddAdmin"
import Login from "./Components/Login/Login";
import { createContext } from "react";



export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});


  return (
    <UserContext.Provider value ={[loggedInUser, setLoggedInUser]}>
        
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
              <Route path="/login">
                <Login />
              </Route>

          </Switch>
        </Router>

    </UserContext.Provider>
  );
}

export default App;
