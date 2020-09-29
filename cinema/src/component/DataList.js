import React, { Fragment, useEffect, useState } from "react";
import {useHistory, BrowserRouter as Router,Link, Route,Switch} from 'react-router-dom';
import EditDB from "./EditDB";

const DataList = () => {
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
  const history = useHistory()

  const getData = async () => {
    try {
      const response = await fetch("http://localhost:5000/create");
      const jsonData = await response.json();

      setData(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  function handlePage(e){
    //e.preventDefault();
    console.log(e);
    //this.props.history.push(`/MoviePage/${e}`)
    
  }

  console.log(datal);

  return (
    <Fragment>
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

export default DataList;