import React from 'react';
import Todos from "./Todos";

const List = () => {
  return (
    <div className="card1 card text-white bg-dark mb-3 border-dark">
      <div class="card-header">
        To Do List
      </div>
      <div className="card-body">
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Add item"></input>
        {/* <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p> */}
        <button type="submit" class="btn btn-primary">Add task</button>
      </div>
      {/* <div>
      <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
        <label class="form-check-label" for="defaultCheck1">
          Default checkbox
        </label>
      </div> */}
      <Todos></Todos>
    </div>
  );
};

export default List;
