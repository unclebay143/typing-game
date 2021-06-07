// React
import React from "react";

// Css
import "./../welcome/welcome.css";
import "./passwordConfirmation.css";

// Component
import wavingHand from "./../../../assets/img/waving-hand.gif";
import { pageurl } from "../../pageurl";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { faMailchimp } from "@fortawesome/free-brands-svg-icons";

export const PasswordConfirmation = () => {
  return (
    <React.Fragment>
      <div className="welcome-onboard">
        <div className="welcome-body">
          <section className="welcome-body--heading">
            <h1>Mail Delivered!!!</h1>
            {/* <img src={wavingHand} alt="waving hand" /> */}
            <FontAwesomeIcon icon={faMailchimp} className="mail-icon" />
          </section>
          <section className="welcome-body--message">
            <p>
              A link to reset your password has been sent to your registered{" "}
              <strong>email</strong> address
            </p>

            <p className="redirection">
              Continue to <Link to={pageurl.LOGIN}>Login</Link>
            </p>
          </section>
        </div>
      </div>
    </React.Fragment>
  );
};
