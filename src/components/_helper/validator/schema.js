import * as yup from "yup";

// REGISTRATION SCHEMA
export const registerationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Check your email address")
    .required("Email is required"),
  username: yup.string().required("Username is required"),
  password: yup
    .string()
    .min(5, "Not strong enough")
    .required("Password is required"),
});

// LOGIN SCHEMA
export const loginSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

// FORGOT PASSWORD SCHEMA
export const forgotPasswordSchema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
});

// UPDATE PROGILE
export const updateProfileSchema = yup.object().shape({
  twitterHandle: yup.string().required("🙏 Required"),
});
