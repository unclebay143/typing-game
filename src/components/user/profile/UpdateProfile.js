import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";

export const UpdateProfile = () => {
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
        }}
        // Yup validate form
        // validationSchema={forgotPasswordSchema}
        // Handle form submission
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ isSubmitting, handleSubmit }) => (
          <Form onClick={() => handleSubmit()}>
            <div className="form-heading">{/* <h1>Update Profile</h1> */}</div>
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
    </div>
  );
};
