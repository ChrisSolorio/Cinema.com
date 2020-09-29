import React, { Fragment, useEffect, useState } from "react";
import DataList from './DataList';
import ReactDom from "react-dom";
import './MovieDetail.css';


export const MovieDetail = ({movieid}) => {
    const [data,setData] = useState ([]);
    console.log ("This is my movieid", movieid)
    const getData = async () => {
        try{
            const response = await fetch (`http://localhost:5000/create/${movieid}`)
            const jsondata = await response.json();
            setData (jsondata);
            console.log ("This function")
            console.log (jsondata)
        }
        catch (err){
            console.error(err.message);
        }
    };

    useEffect(() => {
        getData();
      }, []);
    console.log ("work")
    console.log ({data})
    return (
        <div >
            <div className = "title" ><h1 style = {{textAlign: 'center'}}>{data.title}</h1>
            <h3 style = {{textAlign: 'center', padding: '8px'}}>User rating: {data.rating}</h3>
            </div>
            <div className = "review" style = {{textAlign: 'center'}}>
                <h3>Review</h3>
                <p5> {data.review}</p5></div> 
        </div>

       
    );
};

export default MovieDetail;