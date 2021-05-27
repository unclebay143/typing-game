import * as yup from 'yup';


// REGISTRATION SCHEMA
export const registerationSchema = yup.object().shape({
    email: yup.string().email().required("Sorry! but Email Address is required"),
    username: yup.string().required("Username is required"),
    password: yup.string().matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character").required("Password is required"),
});

// LOGIN SCHEMA
export const loginSchema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required")
});

// FORGOT PASSWORD SCHEMA
export const forgotPasswordSchema = yup.object().shape({
    email: yup.string().email().required("Sorry! but Email Address is required"),
});