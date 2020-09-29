import React, { Fragment, useState } from "react";

const EditDB = ({did}) => {
  const [title,setTitle] = useState(did.title);
  const [rating,setRating] = useState(did.rating);
  const [review, setReview] = useState (did.review);

  const editMovie = async event => {
    event.preventDefault();
    try {
      const body = {title,rating,review};
      const response = await fetch(`http://localhost:5000/create/${did.movie_id}`,
        {
          method: "PUT",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(body)
        }
      );
      window.location = "/Upload";
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Fragment>
      <button type="button" class="btn btn-dark" data-toggle="modal"
        data-target={`#id${did.movie_id}`}>
        Edit</button>

      <div
        class="modal"
        id={`id${did.movie_id}`}
        onClick={() => setTitle(did.title)}
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit </h4>
              <button type="button" class="close" data-dismiss="modal"
                onClick={() => setTitle(did.title)}>
                &times;
              </button>
            </div>
            <div class="modal-body">
              <input
                type="text"
                className="form-control"
                value={title}
                onChange={event => setTitle(event.target.value)}
              />
              <input
                type="text"
                className="form-control"
                value={rating}
                onChange={event => setRating(event.target.value)}
              />
              <textarea class="form-control" value={review} 
              onChange={(event) => setReview(event.target.value)} 
              id="reviewBox" rows="3" placeholder="Movie Review"></textarea>
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-dark"
                data-dismiss="modal"
                onClick={event => editMovie(event)}
              >
                Edit
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setTitle(did.description)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditDB;