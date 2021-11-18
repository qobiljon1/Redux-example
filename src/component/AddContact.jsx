import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();
  let history = useNavigate();

  console.log(history);

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkEmail = contacts.find((contact) => contact.email === email);
    const checkNumber = contacts.find((contact) => {
      return contact.number === parseInt(number);
    });
    if (!email || !name || !number) {
      return toast.warning("Please fill in all fields");
    } else {
      if (checkEmail) {
        return toast.error("This email already Exists!");
      } else {
        if (checkNumber) {
          return toast.error("This number already Exists");
        } else {
          const data = {
            id: contacts[contacts.length - 1].id + 1,
            name,
            email,
            number: parseInt(number),
          };
          dispatch({ type: "ADD_CONTACT", payload: data });
          toast.success("Student added successfully");
          history("/");
          setName("");
          setEmail("");
          setNumber("");
        }
      }
    }
  };

  return (
    <div className="container">
      <div className="row">
        <h1 className="display-3 text-center">Add Contact</h1>
        <div className="col-md-6 shadow mx-auto p-5">
          <form onSubmit={handleSubmit}>
            <div className="input-group my-3">
              <input
                type="text"
                placeholder="Name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="input-group my-3">
              <input
                type="text"
                placeholder="Email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-group my-3">
              <input
                type="number"
                placeholder="Number"
                className="form-control"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div className="d-grid gap-2">
              <input
                type="submit"
                value="Add Student"
                className="btn btn-block btn-dark  mt-6"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
