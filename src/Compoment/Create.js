import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { addsuer } from "../Userreducer";
import { useNavigate } from "react-router-dom";
const Create = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const users = useSelector((state) => state.users);
  const navogate = useNavigate();
  const dispash = useDispatch();
  const handlesubmit = (event) => {
    event.preventDefault();
    dispash(
      addsuer({
        id: users[users.length - 1].id + 1,
        name: name,
        email: email,
      })
    );
    navogate("/");
  };
  return (
    <>
      <div className="w-100 d-flex justify-content-center align-items-center">
        <Form
          onSubmit={handlesubmit}
          className="form_bt"
          style={{ marginTop: "10%", width: "400px" }}
        >
          <h3 className="text-center">Create</h3>
          <Form.Group className="mb-6" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter Name"
              name="name"
              onChange={(e) => setname(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>email</Form.Label>
            <Form.Control
              type="email"
              placeholder="email"
              name="email"
              onChange={(e) => setemail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Create;
