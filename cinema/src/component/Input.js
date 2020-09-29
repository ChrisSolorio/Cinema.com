import React, {Fragment, useState} from "react";
import { FormGroup, FormControl } from "@material-ui/core";
import './Input.css'

export const Input = () => {
    const [title,setTitle] = useState("");
    const [rating,setRating] = useState("Rating");
    const [review, setReview] = useState ("");

    const onSubmitForm = async event => {
        event.preventDefault();
        try {
            const body = {title,rating,review};
            const response = await fetch ("http://localhost:5000/create",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)})
            window.location = "/upload";
        } catch (error) {
            console.log(error.message)
        }
    };

    return (
        <div className = "mt-5 container center_div">
            <form action = "">
                <div className = "form-row">
                <div className="col">
                    <input
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    type="text"
                    className="form-control"
                    placeholder="Movie Title"/>
                    </div>

            <div className="col">
            <select
              value={rating}
              onChange={(event) => setRating(event.target.value)}
              className="form-control"
            >
              <option disabled>Rating</option>
              <option value="10">10</option>
              <option value="9">9</option>
              <option value="8">8</option>
              <option value="7">7</option>
              <option value="6">6</option>
              <option value="5">5</option>
              <option value="4">4</option>
              <option value="3">3</option>
              <option value="2">2</option>
              <option value="1">1</option>
            </select>
          </div>
          </div>
          <div class="mt-5 form-group">
              <textarea class="form-control" value={review} 
              onChange={(event) => setReview(event.target.value)} 
              id="reviewBox" rows="3" placeholder="Movie Review"></textarea>
              </div>
          <form className = "text-center mt-5" onSubmit = {onSubmitForm}>
            <button className ="btn btn-success">Add </button>
        </form>


            </form>
        </div>
        );
};

export default Input;

