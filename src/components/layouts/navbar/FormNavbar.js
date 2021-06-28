import React from "react";
import { pageurl } from "../../pageurl";
import { Button } from "../button/Button";
import "./formnavbar.css";

export const FormNavbar = ({ loginPage }) => {
  return (
    <React.Fragment>
      <header className="formnavbar-header">
        {/* <div className="navbar--brand">
                    <h1><code>&lt;/ Typing&gt;</code></h1>
                </div> */}
        <nav className="form-navbar">
          {/* LOGIN BUTTON */}

          {loginPage ? (
            <Button
              label="Create a new account"
              linkUrl={pageurl.REGISTER}
              look="custom--btn-touch new-account-btn link-btn"
            />
          ) : (
            <Button
              label="Start Typing"
              linkUrl={pageurl.LOGIN}
              look="custom--btn-touch login-btn link-btn"
            />
          )}

          {/* HOME BUTTON */}
          <Button
            label="Learder Board"
            linkUrl={pageurl.HOMEPAGE}
            look="custom--btn-outline-primary explore-btn link-btn"
          />
        </nav>
      </header>
    </React.Fragment>
  );
};
