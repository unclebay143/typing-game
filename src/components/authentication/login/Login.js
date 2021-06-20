import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { Button } from "../../layouts/button/Button";
import "./login.css";
import typeWriter from "./../../../assets/img/type-writer.svg";
import { loginSchema } from "../../_helper/validator/schema";
import { FormNavbar } from "../../layouts/navbar/FormNavbar";
import { Link, useHistory } from "react-router-dom";
import { login } from "../../../redux/user/actions/user.actions";
import { useDispatch, useSelector } from "react-redux";
import { pageurl } from "../../pageurl";

export const Login = () => {
  const dispatch = useDispatch();
  const [nextStep, setnextStep] = useState("Password");
  const history = useHistory();

  // Get user jwt token
  const token = localStorage.getItem("jwt-token");

  // Redirect authenticated users
  if (token) {
    history.push(pageurl.DASHBOARD);
  }

  return (
    <React.Fragment>
      <FormNavbar loginPage={true} />
      <section className="login">
        <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          // Yup should validate form
          validationSchema={loginSchema}
          // Handle form submission
          onSubmit={(values, action) => {
            // Send credentials to backend
            dispatch(login(values, action));
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="form-heading">
                <h1>Login your account</h1>
              </div>
              <div className="input-wrapper">
                <div className="input-heading">
                  <div className="input-label">
                    <label htmlFor="username">Username</label>
                  </div>

                  <ErrorMessage
                    className="error-message"
                    name="username"
                    component="div"
                  />
                </div>

                <Field
                  type="text"
                  name="username"
                  id="username"
                  placeholder="What is your username?"
                />
              </div>
              <div className="input-wrapper">
                <div className="input-heading">
                  <div className="input-label">
                    <label htmlFor="password">Password</label>
                  </div>

                  <ErrorMessage
                    className="error-message"
                    name="password"
                    component="div"
                  />
                </div>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  onClick={() => setnextStep("Now enter your password")}
                  placeholder={`${nextStep}`}
                  autoComplete="on"
                />
              </div>
              <div className="input-wrapper">
                <button
                  className="custom--btn"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Please wait..." : "Login"}
                </button>
                <div className="forgot-password">
                  <Link to="reset-password">I forgot my password 😫</Link>
                </div>
              </div>
            </Form>
          )}
        </Formik>

        <div className="login-image">
          <img
            className="type-writer"
            src={typeWriter}
            alt="two people with typewriter"
          />
        </div>
      </section>
    </React.Fragment>
  );
};
