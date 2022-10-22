import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postUsers } from "../../api/api";
import "./AddUser.css";
import { Button, Form } from "react-bootstrap";

export default function AddUser() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cell, setCell] = useState("");
  const [age, setAge] = useState("");

  const validEmailRegex = RegExp(
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(\.+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validEmailRegex.test(email)) {
      alert("Email is not valid!");
      return;
    }
    postUsers({ name, email, cell, age })
      .then((res) => {
        alert("User has been added successfully.");
        navigate("/");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="mt-3 container d-flex justify-content-center text-center margin-from-top">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter full name"
            name="name"
            required
            maxLength={30}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            required
            maxLength={30}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Cell No.</Form.Label>
          <Form.Control
            type="text"
            name="cell"
            placeholder="Enter cell no."
            required
            maxLength={13}
            value={cell}
            onChange={(e) => setCell(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            name="age"
            placeholder="Enter age"
            min={18}
            max={60}
            required
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </Form.Group>

        <div className="text-center">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}
