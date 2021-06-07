import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import "./forgotpassword.css";
import searchingAccounct from "./../../../assets/img/searching-someone.svg";
import { forgotPasswordSchema } from "../../_helper/validator/schema";
import { FormNavbar } from "../../layouts/navbar/FormNavbar";

export const ForgotPassword = () => {
  return (
    <React.Fragment>
      <FormNavbar loginPage={false} />
      <section className="forgotpassword">
        <Formik
          initialValues={{
            email: "",
          }}
          // Yup validate form
          validationSchema={forgotPasswordSchema}
          // Handle form submission
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ isSubmitting, handleSubmit }) => (
            <Form onClick={() => handleSubmit()}>
              <div className="form-heading">
                <h1>Let's Find your account</h1>
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
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Provide your registered email address"
                />
              </div>
              <div className="input-wrapper">
                <button
                  type="submit"
                  className="custom--btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Working on it..." : "Reset"}
                </button>
              </div>
            </Form>
          )}
        </Formik>

        <div className="forgotpassword-image">
          <img
            className="type-writer"
            src={searchingAccounct}
            alt="someone searching for accounts"
          />
        </div>
      </section>
    </React.Fragment>
  );
};
