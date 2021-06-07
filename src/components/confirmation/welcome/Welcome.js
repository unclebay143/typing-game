// React
import React from "react";

// Css
import "./welcome.css";

// Component
import wavingHand from "./../../../assets/img/waving-hand.gif";
import { pageurl } from "../../pageurl";
import { Link } from "react-router-dom";

export const Welcome = () => {
  return (
    <React.Fragment>
      <div className="welcome-onboard">
        <div className="welcome-body">
          <section className="welcome-body--heading">
            <h1>Welcome onboard</h1>
            <img src={wavingHand} alt="waving hand" />
          </section>
          <section className="welcome-body--message">
            <p>
              we are happy to have you join us, a welcome{" "}
              <strong>message</strong> has been sent to your registered mail box
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
