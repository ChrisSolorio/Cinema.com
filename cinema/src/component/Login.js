import React, {Component, Fragment, useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import ReactDom from 'react-dom';
import Guide from './Guide';
import './Guide.css';
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";


const Login = ({setAuth}) => {
  //this.state = {}
  //this.handleClick = this.handleClick.bind(this)
  
  const history = useHistory();

  const handleClick = (event) => {
      if (event.target.name === "MainButton") {
        history.push('/')
      }

      if (event.target.name === 'UpButton'){
          history.push('/Upload')
      }
  
      if (event.target.name === 'LoginButton') {
        history.push('/Login')
    }
  
    }
  
  const [inputs,setInputs] = useState ({
      email: "",
      password: "",
  });

  const {email,password} = inputs;
  const onChange = e => setInputs (
      {
          ...inputs,[e.target.name]: e.target.value
      }
  );

  const onSubmitForm = async e => {
      e.preventDefault();
      try {
          const body = {email,password};
          const response = await fetch (
              "http://localhost:5000/auth/login",
              {
                  method: "POST",
                  headers : { "Content-type" : "application/json"},
                  body : JSON.stringify(body)
              }
          );
          const parseRes = await response.json();
          console.log("I'm looking here", parseRes)
           if (parseRes.token) {
             localStorage.setItem("token", parseRes.token);
             setAuth (true);
             toast.success("Logged in");
           }
           else {
             setAuth(false);
             
             toast.error(parseRes);
           }
          
      } catch (error) {
          console.log(error.message)
      }
  };


//render () {
  return (
      <fragment>
          <Guide onClick = {handleClick} page = "side"></Guide>
          <h1 className = "text-center mt-5">Login</h1>
      <form onSubmit = {onSubmitForm} >
          <input type = "email" name = "email" style={{width:'500px'}} value = {email} placeholder = "email"
          onChange = {e => onChange(e)} className = "form-control my-3" />

           <input type = "password" name = "password" style={{width:'500px'}} value = {password} placeholder = "password"
          onChange = {e => onChange(e)} className = "form-control my-3" />


          <button className = "btn btn-success btn-block" style={{width:'100px'}}>Log in</button>
      </form>
      <Link to ="/register">Register</Link>
      </fragment>
     
  );

}


/*const Login = () => {
  return (
      <Fragment>
        <Guide onClick = {this.handleClick} page = "login"></Guide>
          <h1>Login</h1>
      </Fragment>
  );
};


export default Login;*/


/*class Login extends React.Component {
    render () {
        return (
        <div className = "logon">
                <Guide onClick = {this.handleClick} page = "login"></Guide>
           <h1>Hi</h1>
           <form>
  <div class="login-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>

           
           </div>
        );
    }


}*/

export default Login;