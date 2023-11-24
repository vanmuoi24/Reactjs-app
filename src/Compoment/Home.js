import { Col, Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import logo from "../acset/img/IMG_E3652.JPG";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteUser } from "../Userreducer";

function Homne() {
  const users = useSelector((state) => state.users);
  const dispash = useDispatch();
  const navogate = useNavigate();
  const handledelete = (id) => {
    console.log("muoi");
    dispash(deleteUser({ id: id }));
  };

  return (
    <>
      <div className=" d-flex  gap-2 align-items-center p-4  ">
        <Button as="input" type="button" value="log out" />
        <Image
          src={logo}
          roundedCircle
          style={{ width: "40px", height: "40px" }}
        />
        <h4></h4>
      </div>
      <div className=" mt-5 m-lg-4 ">
        <Link to="/Create">
          <Button variant="success">Success</Button>{" "}
        </Link>
      </div>

      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                {" "}
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td style={{ display: "flex", gap: "10px" }}>
                  <Link to={`/edit/${user.id}`}>
                    <Button as="input" type="button" value="Edit" />
                  </Link>
                  <Button
                    onClick={() => handledelete(user.id)}
                    as="input"
                    type="button"
                    value="Delete"
                    variant="danger"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}
export default Homne;
