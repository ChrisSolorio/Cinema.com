import React, {useState, useEffect} from 'react';
import Main from './component/Main.js';
import './App.css';
import Upload from './component/Upload'
import Movie from './component/MoviePage'
import Login from './component/Login'
import Dashboard from './component/Dashboard'
import Register from './component/Register'

import {BrowserRouter as Router, Route, Switch ,Redirect} from 'react-router-dom';

const PageSelect = ({did}) => {

};


function App() {

  const checkAuthenticated = async () => {
    try {
      const res = await fetch("http://localhost:5000/auth/verify", {
        method: "GET",
        headers: { token: localStorage.token }
      });

      const parseRes = await res.json();
      console.log("This is my verify function", parseRes)

      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    checkAuthenticated();
  }, []);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = boolean => {
    setIsAuthenticated(boolean);
  };


  return (
    <Router>
      <Switch>
        <Route exact path = "/" component ={Main}/>
        <Route exact path = "/Upload" component = {Upload}/>
        <Route path = "/MoviePage/:id" component = {Movie}/>

        <Route exact path = "/login" render ={props => !isAuthenticated ? (<Login{...props} setAuth = {setAuth}/>) :(<Redirect to = "/dashboard"/>)}/>
        <Route exact path = "/register" render ={props => !isAuthenticated ? (<Register {...props} setAuth = {setAuth}/>) :(<Redirect to = "/login"/>)}/>
        <Route exact path = "/dashboard" render ={props => isAuthenticated ? (<Dashboard {...props} setAuth = {setAuth}/>) :(<Redirect to = "/login"/>)}/>

      </Switch>
    </Router>
  );
}

export default App;
