import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { Button } from '../../layouts/button/Button';
import './registration.css';
import typeWriter from './../../../assets/img/type-writer.svg';
import { registerationSchema } from '../../_helper/validator/schema';
import { FormNavbar } from '../../layouts/navbar/FormNavbar';


export const Registration = () => {
    return (
        <React.Fragment>
            <FormNavbar />
            <section className="registration">
                <Formik

                    initialValues={{
                        username: "",
                        password: "",
                        email: ""
                    }}
                    // FORM VALIDATION HANDLED BY YUP
                    validationSchema={registerationSchema}

                    onSubmit={(values)=>{// HANDLE FORM SUBMISSION
                        console.log(values)
                    }}
                
                >
                    {({ isSubmitting })=>(
                        <Form>
                            <div className="form-heading">
                                {/* <h1>Create a new account</h1> */}
                                <h1>Login your account</h1>
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="email">Email</label>
                                <ErrorMessage className="error-message" name="email" component="div" />
                                <Field 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    placeholder="Enter your email"/>
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="username">Username</label>
                                <ErrorMessage className="error-message" name="username" component="div" />
                                <Field 
                                    type="text" 
                                    name="username" 
                                    id="username" 
                                    placeholder="Create username"/>
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="password">Password</label>
                                <ErrorMessage className="error-message" name="password" component="div" />
                                <Field 
                                    type="password" 
                                    name="password" 
                                    id="password" 
                                    placeholder="Create a strong password"
                                    autoComplete="on"
                                />
                            </div>
                            <div className="input-wrapper">
                                <Button label="Get Started" type="submit" disabled={isSubmitting}/>
                            </div>
                        </Form>
                    )}
                </Formik>

                <div className="registration-image">
                    {/* social media signup layout goes well here in case you want to add it, import share button here */}
                    <img className="type-writer" src={typeWriter} alt="two people with typewriter" />
                </div>
            </section>
        </React.Fragment>
    )
}
