import React from "react";
import { Link, useParams } from "react-router-dom";
const EditContact = () => {
     let { id } = useParams()
     
  return (
    <div className="container">
      <div className="row">
                 <h1 className="display-3 text-center">Edit Student {id}</h1>
        <div className="col-md-6 shadow mx-auto p-5">
          <form action="">
            <div className="input-group">
              <input
                type="text"
                placeholder="Name"
                className="form-control mb-3"
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                placeholder="Email"
                className="form-control mb-3"
              />
            </div>
            <div className="input-group">
              <input
                type="number"
                placeholder="Number"
                className="form-control mb-3"
              />
            </div>
            <div className="input-group d-flex justify-content-center">
              <input
                type="submit"
                value="Update Student"
                className="btn btn-block btn-success"
              />
              <Link to="/" className="btn btn-danger mx-4">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditContact;
