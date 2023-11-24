import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { updateUser } from "../Userreducer";

const Update = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const existingUser = users.filter((f) => f.id == id);
  const { name, email } = existingUser[0];
  const [uname, setname] = useState(name);
  const [uemail, setemail] = useState(email);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleupdate = (event) => {
    event.preventDefault();
    dispatch(
      updateUser({
        id: id,
        name: uname,
        email: uemail,
      })
    );
    navigate("/");
  };
  return (
    <>
      <div className="w-100 d-flex justify-content-center align-items-center">
        <Form
          className="form_bt"
          style={{ marginTop: "10%", width: "400px" }}
          onSubmit={handleupdate}
        >
          <h3 className="text-center">Create</h3>
          <Form.Group className="mb-6" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter Name"
              name="name"
              value={uname}
              onChange={(e) => setname(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>email</Form.Label>
            <Form.Control
              type="email"
              placeholder="email"
              name="email"
              value={uemail}
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

export default Update;
