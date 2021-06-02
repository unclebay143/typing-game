import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { Button } from '../../layouts/button/Button';
import './forgotpassword.css';
import searchingAccounct from './../../../assets/img/searching-someone.svg';
import { forgotPasswordSchema } from '../../_helper/validator/schema';
import { FormNavbar } from '../../layouts/navbar/FormNavbar';


export const ForgotPassword = () => {
    
    return (
        <React.Fragment>
            <FormNavbar loginPage={false}/>
            <section className="forgotpassword">
                <Formik

                    initialValues={{
                        email: ""
                    }}
                    // FORM VALIDATION HANDLED BY YUP
                    validationSchema={forgotPasswordSchema}

                    onSubmit={(values)=>{// HANDLE FORM SUBMISSION
                        console.log(values)
                    }}
                
                >
                    {({ isSubmitting })=>(
                        <Form>
                            <div className="form-heading">
                                <h1>Let's Find your account</h1>
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="username">Email</label>
                                <ErrorMessage className="error-message" name="username" component="div" />
                                <Field 
                                    type="text"
                                    name="username" 
                                    id="username" 
                                    placeholder="Provide your registered email address"
                                />
                            </div>
                            <div className="input-wrapper">
                                <Button label="reset" type="submit" disabled={isSubmitting}/>
                            </div>
                        </Form>
                    )}

                </Formik>


                <div className="forgotpassword-image">
                    <img className="type-writer" src={searchingAccounct} alt="someone searching for accounts" />
                </div>
            </section>
        </React.Fragment>
    )
}
