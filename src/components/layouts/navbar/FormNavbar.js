import React from 'react';
import { pageurl } from '../../pageurl';
import { Button } from '../button/Button';
import './formnavbar.css';

export const FormNavbar = ({loginPage}) => {
    return (
        <React.Fragment>
            <header className="formnavbar-header">
                {/* <div className="navbar--brand">
                    <h1><code>&lt;/ Typing&gt;</code></h1>
                </div> */}
                <nav className="form-navbar">
                    {/* LOGIN BUTTON */}

                    {
                        
                        loginPage ? (
                            <Button 
                                label="Create a new account" 
                                linkUrl={pageurl.REGISTER}
                                type="custom--btn-touch new-account-btn"
                            />
                            ):(
                            <Button 
                                label="Start Typing" 
                                linkUrl={pageurl.LOGIN}
                                type="custom--btn-touch"
                            />
                        )

                    }

                    {/* HOME BUTTON */}
                    <Button 
                        label="Explore"
                        linkUrl={pageurl.HOMEPAGE}
                        type="custom--btn-outline-primary explore-btn"
                    />
                </nav>
            </header>
        </React.Fragment>
    )
}
