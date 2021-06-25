import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import "./updateprofile.css";
import { updateProfileSchema } from "../../_helper/validator/schema";

export const UpdateProfile = () => {
  return (
    <div className="update-profile">
      <Formik
        initialValues={{
          twitterHandle: "",
        }}
        // Yup validate form
        validationSchema={updateProfileSchema}
        // Handle form submission
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="form-heading">
              <h1>Update Profile</h1>
            </div>
            <div className="input-wrapper">
              <div className="input-heading">
                <div className="input-label">
                  <label htmlFor="email">Username</label>
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
                placeholder="Update username"
                disabled="true"
              />
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
                placeholder="username@sample.com"
                disabled="true"
              />
            </div>
            <div className="input-wrapper">
              <div className="input-heading">
                <div className="input-label">
                  <label htmlFor="twitterHandle">Twitter Handle</label>
                </div>
                <ErrorMessage
                  className="error-message"
                  name="twitterHandle"
                  component="div"
                />
              </div>
              <Field
                type="text"
                name="twitterHandle"
                id="twitterHandle"
                placeholder="@username"
              />
            </div>
            <div className="input-wrapper">
              <button
                type="submit"
                className="custom--btn custom--btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Working on it..." : "Update Profile"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
