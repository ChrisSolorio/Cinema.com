import React, { Fragment, useEffect, useState } from "react";
import DataList from './DataList';
import ReactDom from "react-dom";
import Guide from './Guide';
import MovieDetail from "./MovieDetail";

class MoviePage extends React.Component{
    constructor(){
        super();
        this.state = {
            pageInfo: window.location.pathname.slice(11)
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        if (event.target.name === 'UpButton'){
            this.props.history.push('/Upload')
        }
        if (event.target.name === 'MainButton'){
            this.props.history.push('/')
        }

        if (event.target.name === 'LoginButton') {
            this.props.history.push('/Login')
        }

    }

    render (){

        return (
            <div>
            <Guide onClick = {this.handleClick} page = "side"></Guide>
            <MovieDetail movieid = {this.state.pageInfo} ></MovieDetail>
            
            </div>
    
        );
    
    }

}





/*const MoviePage = ({match:{params:{id}}}) => {

    return (
        <div>
        <Guide page = "main"></Guide>
        <h1>{id}</h1>
        </div>

       
    );
}*/

export default MoviePage;
//export default ({match:{params:{id}}}) => <h1>{id}</h1>