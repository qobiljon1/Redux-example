import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const EditContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  let { id } = useParams();
  const history = useNavigate();

  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();
  const currentContacts = contacts.find(
    (contact) => contact.id === parseInt(id)
  );

  console.log(currentContacts, name);

  useEffect(() => {
    setName(currentContacts.name);
    setEmail(currentContacts.email);
    setNumber(currentContacts.number);
  }, [currentContacts]);

  const editContact = (e) => {
    e.preventDefault();
    const checkEmail = contacts.find(
      (contact) => contact.id !== parseInt(id) && contact.email === email
    );
    console.log(name);
    const checkNumber = contacts.find(
      (contact) =>
        contact.id !== parseInt(id) && contact.number === parseInt(number)
    );
    if (!email || !name || !number) {
      return toast.warning("Please fill in all fields");
    }
    if (checkEmail) {
      return toast.error("This email already Exists!");
    }
    if (checkNumber) {
      return toast.error("This number already Exists");
    }
    const data = {
      id:parseInt(id),  
      name,
      email,
      number: parseInt(number),
    };
    dispatch({ type: "UPDATE_CONTACT", payload: data });
    toast.success("Student edited successfully");
    history("/");
    setName("");
    setEmail("");
    setNumber("");
  };
  return (
    <div className="container">
      {currentContacts ? (
        <div className="row">
          <h1 className="display-3 text-center">Edit Student {id}</h1>
          <div className="col-md-6 shadow mx-auto p-5">
            <form onSubmit={editContact}>
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Name"
                  className="form-control mb-3"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Email"
                  className="form-control mb-3"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-group">
                <input
                  type="number"
                  placeholder="Number"
                  className="form-control mb-3"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
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
      ) : (
        <div
          className="alert alert-danger d-flex align-items-center"
          role="alert"
        >
          <div>Student with this {id} not exists</div>
        </div>
      )}
    </div>
  );
};

export default EditContact;
