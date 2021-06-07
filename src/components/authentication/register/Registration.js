// React
import React from "react";
import { useDispatch } from "react-redux";

// Formik
import { ErrorMessage, Field, Form, Formik } from "formik";
import { registerationSchema } from "../../_helper/validator/schema";

// Components
import { FormNavbar } from "../../layouts/navbar/FormNavbar";
import { Button } from "../../layouts/button/Button";
import typeWriter from "./../../../assets/img/type-writer.svg";

// Action
import { register } from "../../../redux/user/actions/user.actions";

// Css
import "./registration.css";

export const Registration = () => {
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <FormNavbar />
      <section className="registration">
        <Formik
          initialValues={{
            username: "",
            password: "",
            email: "",
          }}
          // Yup should validate form
          validationSchema={registerationSchema}
          // Handle form submission
          onSubmit={(values, action) => {
            // Send credentials to backend
            dispatch(register(values, action));
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="form-heading">
                <h1>Create new account</h1>
              </div>
              <div className="input-wrapper">
                <div className="input-heading">
                  <div className="input-label">
                    <label htmlFor="email">Email</label>
                  </div>
                  <ErrorMessage
                    className="error-message"
                    name="email"
                    component="div"
                  />
                </div>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                />
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
                  placeholder="Create username"
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
                  placeholder="Create a strong password"
                  autoComplete="on"
                />
              </div>
              <div className="input-wrapper">
                <button
                  type="submit"
                  className="custom--btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Working on it..." : "Get Started"}
                </button>
              </div>
            </Form>
          )}
        </Formik>

        <div className="registration-image">
          {/* social media signup layout goes well here in case you want to add it, import share button here */}
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
