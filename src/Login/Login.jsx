import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
// import { getUserDetail } from "../store/UserSlice";

const Login = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="container-fluid ">
      <div className="row login_row">
        <div className="col-md-5">
          <img
            src="https:www.keylogic.com/wp-content/uploads/2021/07/KeyLogic20Logo_official-1.svg"
            alt="logic Logo"
          />
          <h1>Connect with friends and the world around you on keylogic.</h1>
        </div>
        <div className="col-md-5 offset-md-1 ">
          <Form className="bg-white rounded p-md-5 p-2 rounded-4 shadow-lg">
            <h2 className="text-success text-center">
              Enter Your Login Detail
            </h2>
            <h5 className="text-center text-danger">{}</h5>
            <div className="pt-2">
              <label htmlFor="email" className="pt-3">
                Email
              </label>
              <input type="email" name="email" className="form-control" />
              <label htmlFor="password" className="pt-3">
                Password
              </label>
              <input type="password" name="password" className="form-control" />
              <div className="text-center pt-3">
                <button className="btn btn-success form-control">Login</button>
              </div>
              <div className="text-center p-3">
                <Link className="">Forgotten Password</Link>
              </div>
              <hr />
            </div>
            <div className="text-center">
              <Button className="btn btn-primary ms-3" onClick={handleShow}>
                Create New Account
              </Button>
            </div>
          </Form>

          <Modal
            show={show}
            onHide={handleClose}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>
                <h2>Sign Up</h2>
                <h6>It's Quick And Easy</h6>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form className="row">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="fname"
                    className="form-control m-1"
                    placeholder="First Name"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    name="lname"
                    className="form-control m-1"
                    placeholder="Last Name"
                  />
                </div>
                <div className="col-md-12">
                  <input
                    type="email"
                    name="email"
                    className="form-control m-1"
                    placeholder="Mobile No OR email address"
                  />
                </div>
                <div className="col-md-12">
                  <input
                    type="password"
                    name="password"
                    className="form-control m-1"
                    placeholder="Password"
                  />
                </div>

                <div className="col-md-12 m-1">
                  <label htmlFor="dob">Date Of Birth</label>
                  <input type="date" name="dob" className="form-control " />
                </div>
                <div className="row m-1 d-flex justify-content-around align-items-center">
                  <div className="col-md-6 d-flex justify-content-around align-items-center border  rounded p-2">
                    <label htmlFor="male" className="ms-5">
                      Male
                    </label>
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      id="male"
                      className="form-check p-3 me-5"
                    />
                  </div>
                  <div className="col-md-6 d-flex justify-content-between align-items-center border rounded p-2">
                    <label htmlFor="female" className="ms-5">
                      female
                    </label>
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      id="female"
                      className="form-check p-3 me-5"
                    />
                  </div>
                </div>
              </Form>
              <div className="terms">
                People who use our service may have uploaded your contact
                information to keylogic. Learn more.
                <br />
                <br />
                By clicking Sign Up, you agree to our Terms, Privacy Policy and
                Cookies Policy. You may receive SMS notifications from us and
                can opt out at any time.
              </div>
              <div className="text-center m-3">
                <button className="btn btn-success ps-3 pe-3 ">Sign Up</button>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Login;
