import { Badge } from "react-bootstrap";
import "./index.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { object, string, number, date, InferType } from "yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
function Register() {
  let userSchema = yup.object().shape({
    firstName: yup
      .string()
      .min(2, "Vui lòng nhập ít nhất 2 ký tự")
      .max(8, "Tối đa 8 ký tự")
      .required("Vui lòng nhập trường này"),
    lastName: yup
      .string()
      .min(2, "Ít nhất 2 ký tự")
      .max(8, "Tối đa 8 ký tự")
      .required("Vui lòng nhập trường này"),
    email: yup.string().email("Email không hợp lệ"),
    password: yup
      .string()
      .min(8, "Tối thiểu 8 ký tự")
      .max(12, "Tối đa 12 ký tự")
      .required("Vui lòng nhập mật khẩu"),
  });
  const navigative = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(userSchema),
  });
  const handledata = (data) => {
    let datalocal = localStorage.setItem("data_user", JSON.stringify(data));

    toast.success("Sign Up Success!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    {
      /* Same as */
    }
    <ToastContainer />;

    setTimeout(() => {
      navigative("/Login");
    }, 2000);
  };
  return (
    <>
      {" "}
      <div className=" w-100   d-flex  justify-content-center  align-items-center  ">
        <Form
          className="form_bt"
          style={{ marginTop: "10%", width: "400px" }}
          onSubmit={handleSubmit(handledata)}
        >
          <h3 className=" text-center ">Sign in</h3>
          <Form.Group className="mb-6" controlId="formBasicEmail">
            <Form.Label>Fisrt Name</Form.Label>
            <Form.Control
              type="fisrtName"
              placeholder="Fisrt Name"
              name="firstName"
              {...register("firstName")}
            />
            <span>{errors?.firstName?.message}</span>
          </Form.Group>
          <Form.Group className="mb-6">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="lastName"
              placeholder="Last Name"
              name="lastName"
              {...register("lastName")}
            />
            <span>{errors?.lastName?.message}</span>
          </Form.Group>
          <Form.Group className="mb-6">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              {...register("email")}
            />
            <span>{errors?.email?.message}</span>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              {...register("password")}
            />
          </Form.Group>
          <span>{errors?.password?.message}</span>
          <Form.Group className="mb-3">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>

          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          {/* Same as */}
          <ToastContainer />
        </Form>
      </div>
    </>
  );
}

export default Register;
