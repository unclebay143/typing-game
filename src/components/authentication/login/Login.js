import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { Button } from '../../layouts/button/Button';
import './login.css';
import typeWriter from './../../../assets/img/type-writer.svg';
import { loginSchema } from '../../_helper/validator/schema';
import { FormNavbar } from '../../layouts/navbar/FormNavbar';
import { Link } from 'react-router-dom';


export const Login = () => {

    console.log(window.location.hostname)
    const [nextStep, setnextStep] = useState("Password");
    console.log(nextStep);
    return (
        <React.Fragment>
            <FormNavbar loginPage={true}/>
            <section className="login">
                <Formik

                    initialValues={{
                        username: "",
                        password: "",
                        email: ""
                    }}
                    // FORM VALIDATION HANDLED BY YUP
                    validationSchema={loginSchema}

                    onSubmit={(values)=>{// HANDLE FORM SUBMISSION
                        console.log(values)
                    }}
                
                >
                    {({ isSubmitting })=>(
                        <Form>
                            <div className="form-heading">
                                <h1>Login your account</h1>
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="username">Username</label>
                                <ErrorMessage className="error-message" name="username" component="div" />
                                <Field 
                                    type="text"
                                    name="username" 
                                    id="username" 
                                    placeholder="What is your username?"
                                />
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="password">Password</label>
                                <ErrorMessage className="error-message" name="password" component="div" />
                                <Field 
                                    type="password" 
                                    name="password" 
                                    id="password" 
                                    onClick={()=>setnextStep("Now enter your password")} 
                                    placeholder={`${nextStep}`} 
                                    autoComplete="on"
                                />
                            </div>
                            <div className="input-wrapper">
                                <Button label="Login" type="submit" disabled={isSubmitting}/>
                                <div className="forgot-password">
                                    <Link to="reset-password">I forgot my password 😫</Link>
                                </div>
                            </div>
                        </Form>
                    )}

                </Formik>


                <div className="login-image">
                    <img className="type-writer" src={typeWriter} alt="two people with typewriter" />
                </div>
            </section>
        </React.Fragment>
    )
}
