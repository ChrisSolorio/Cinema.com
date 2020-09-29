import React from 'react';
import ReactDom from "react-dom";
import Guide from './Guide'
import DataList from './DataList'

class Main extends React.Component{
    constructor(){
        super()
        this.state = {}
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event) {
        if (event.target.name === 'UpButton'){
            this.props.history.push('/Upload')
        }
        if (event.target.name === 'LoginButton') {
            console.log ("wut");
            this.props.history.push('/Login')
        }

    }

    render (){

        return (
            <div>
            <Guide onClick = {this.handleClick} page = "main"></Guide>
            <h3>This project is a simple web application meant show a couple of different components working together. The front end  built with React.js displays information
                from a postgres SQL database. The backend is created with node.js
            </h3>
            <DataList/>
            
            </div>
    
        );
    
    }

}


export default Main;