import React, {Fragment, useState, useEffect} from "react";
import {useHistory, BrowserRouter as Router,Link, Route,Switch} from 'react-router-dom';
import EditDB from "./EditDB";
import Guide from './Guide';



const Dashboard = ({setAuth}) => {

    const [datal, setData] = useState([]);
    


  const deleteData = async id => {
    try {
      console.log(id)
      const deleteData = await fetch(`http://localhost:5000/create/${id}`, {
        method: "DELETE"
      });

      setData(datal.filter(did => did.movie_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };
  const history = useHistory();

  const getData = async () => {
    try {
      const response = await fetch("http://localhost:5000/create");
      const jsonData = await response.json();

      setData(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  function handleClick(event){
    if (event.target.name === "MainButton") {
      history.push('/')
    }

    if (event.target.name === 'UpButton'){
      history.push('/Upload')
  }

    if (event.target.name === 'LoginButton') {
      history.push('/Login')
  };

  }

  useEffect(() => {
    getData();
  }, []);

  function handlePage(e){
    //e.preventDefault();
    console.log(e);
    //this.props.history.push(`/MoviePage/${e}`)
    
  }

  console.log(datal);

    const [name,setName] = useState("")

    async function getName() {
        try {
            const response = await fetch ("http://localhost:5000/dashboard/", {
                method: "GET",
                headers: {token: localStorage.token}
            })

            const parseRes = await response.json()
            setName (parseRes.user_name)
            
        } catch (error) {
            console.error(error.message)
            
        }
    }

    const logout = (e) => {
        e.preventDefault()
        localStorage.removeItem("token")
        setAuth(false);
    }

    useEffect (()=> {
        getName();
    })

    return (
        
        <Fragment>
            <Guide onClick = {handleClick} page = "side"></Guide>
            <h1>Dashboard {name}</h1>
            <button className="btn btn-primary" onClick= {e => logout(e)}>Logout</button>
          {" "}
          <table class="table mt-5 text-center table-bordered data_div">
            <thead>
              <tr>
                <th>Title</th>
                <th>Rating</th>
                <th>Review</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
    
              {datal.map(did => (
                <tr key={did.movie_id}>
                  <td><Link to = {`/MoviePage/${did.movie_id}`}> {did.title}</Link></td>
              <td>{did.rating}</td>
              <td>{did.review}</td>
                  <td>
                    <EditDB did={did} />
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteData(did.movie_id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Fragment>
      );
};


export default Dashboard;