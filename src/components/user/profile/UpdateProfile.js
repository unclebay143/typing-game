import React, { useEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import "./updateprofile.css";
import { updateProfileSchema } from "../../_helper/validator/schema";
import { updateProfile } from "../../../redux/user/actions/user.actions";
import { useDispatch, useSelector } from "react-redux";
import { pageurl } from "../../pageurl";
import { useHistory } from "react-router";

export const UpdateProfile = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { user } = useSelector((state) => state.user);
  const { email, userName, twitterHandle } = user || {};
  const [darkTheme, setDarkTheme] = useState("");
  let prefferedTheme = JSON.parse(localStorage.getItem("_dark_theme"));

  // Set user preferred theme
  useEffect(() => {
    setDarkTheme(prefferedTheme);
  }, [prefferedTheme]);

  return (
    <div className={`update-profile ${darkTheme ? "dark" : "light-mode"}`}>
      <Formik
        initialValues={{
          twitterHandle: "",
        }}
        // Yup validate form
        validationSchema={updateProfileSchema}
        // Handle form submission
        onSubmit={(values, action) => {
          dispatch(updateProfile(values, action)).then((res) => {
            history.push(pageurl.USER_PROFILE);
          });
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
                placeholder={userName}
                disabled={true}
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
                placeholder={email}
                disabled={true}
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
                placeholder={twitterHandle ? twitterHandle : "@username"}
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
