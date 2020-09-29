import React from 'react';
import Main from './component/Main.js';
import './App.css';
import Upload from './component/Upload'
import Movie from './component/MoviePage'
import Login from './component/Login'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

const PageSelect = ({did}) => {

};


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = "/" component ={Main}/>
        <Route exact path = "/Upload" component = {Upload}/>
        <Route exact path = "/Login" component = {Login}/>
        <Route path = "/MoviePage/:id" component = {Movie}/>

      </Switch>
    </Router>
  );
}

export default App;
