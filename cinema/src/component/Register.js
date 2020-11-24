import React, {Fragment, useState} from "react";
import {Link, Redirect} from 'react-router-dom';
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import Guide from './Guide';


/*class Register extends React.Component {
    render () {
        return (
            <Fragment>
                <Guide onClick = {this.handleClick} page = "side"></Guide> 
            </Fragment>
        );
    }
}*/

const Register =({setAuth}) => {
        //this.state = {}
        //this.handleClick = this.handleClick.bind(this)
        const history = useHistory();
        const handleClick = (event) => {
            if (event.target.name === "MainButton") {
              history.push('/')
              //window.location("/");
            }

            if (event.target.name === 'UpButton'){
                history.push('/Upload')
                //window.location("/Upload");
            }
        
            if (event.target.name === 'LoginButton') {
              history.push('/Login')
              //window.location("/Login");
          }
        
          }
        
        const [inputs,setInputs] = useState ({
            email: "",
            password: "",
            name: ""
        });

        const {email,password,name} = inputs;
        const onChange = e => setInputs (
            {
                ...inputs,[e.target.name]: e.target.value
            }
        );

        const onSubmitForm = async e => {
            e.preventDefault();
            try {
                const body = {email,password,name};
                const response = await fetch (
                    "http://localhost:5000/auth/register",
                    {
                        method: "POST",
                        headers : { "Content-type" : "application/json"},
                        body : JSON.stringify(body)
                    }
                );
                const parseRes = await response.json();
                console.log(parseRes);
                localStorage.setItem("token", parseRes.token)
                setAuth (true)
                
            } catch (error) {
                console.log(error.message)
            }
        }
      
     
    //render () {
        return (
            <fragment>
                <Guide onClick = {handleClick} page = "side"></Guide> 

                <h1 className = "text-center my-5">Register</h1>

            <form onSubmit = {onSubmitForm}>
                <input type = "email" name = "email" style={{width:'500px'}} value = {email} placeholder = "email"
                onChange = {e => onChange(e)} className = "form-control my-3" />
                
                <input type = "text" name = "name" style={{width:'500px'}} value = {name} placeholder = "name"
                onChange = {e => onChange(e)} className = "form-control my-3" />

                 <input type = "password" name = "password" style={{width:'500px'}} value = {password} placeholder = "password"
                onChange = {e => onChange(e)} className = "form-control my-3" />


                <button className = "btn btn-success btn-block" style={{width:'100px'}}>Register</button>
            </form>
            <Link to ="/login">login</Link>
            </fragment>
           
        );
    //}


}

/*class Register extends React.Component {
    constructor (){
    this.state = {
        email: "",
        password: "",
        name: ""
    }
    //this.handleClick = this.handleClick.bind(this)
    this.onChange = this.onChange.bind(this)
    this.onSubmitForm = this.onSubmitForm.bind(this)

    const {email,password,name} = inputs;
    
}
 onChange = e => setInputs (
    {
        ...inputs,[e.target.name]: e.target.value
    }
);

 onSubmitForm = async e => {
    e.preventDefault();
    try {
        const body = {email,password,name};
        const response = await fetch (
            "http://localhost:5000/authentication/register",
            {
                method: "POST",
                headers : { "Content-type" : "application/json"},
                body : JSON.stringify(body)
            }
        );
        const parseRes = await response.json();
        
    } catch (error) {
        console.log(error.message)
    }
}
  
 
render () {
    return (
        <Fragment>
        <Guide onClick = {this.handleClick} page = "side"></Guide>
        <form onSubmit = {onSubmitForm}>
            <input type = "email" name = "email" value = {email} placeholder = "email"
            onChange = {e => onChange(e)} className = "form-control my-3" />

             <input type = "password" name = "password" value = {password} placeholder = "password"
            onChange = {e => onChange(e)} className = "form-control my-3" />

             <input type = "text" name = "name" value = {name} placeholder = "name"
            onChange = {e => onChange(e)} className = "form-control my-3" />

            <button className = "btn btn-success btn-block">Register</button>
        </form>
        <Link to ="/login">login</Link>
        </Fragment>
       
    );
}


} */



export default Register;