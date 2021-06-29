import React from "react";

// styles
import "./navbar.css";

// components
import { Button } from "../button/Button";
import { pageurl } from "../../pageurl";
import { Link } from "react-router-dom";
import { comingSoon } from "../../comingSoon";
import { useDispatch } from "react-redux";

export const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <header>
        <nav className="navbar">
          <section className="left-items">
            <div className="navbar--brand">
              <h1>
                <code>&lt;/ Typing&gt;</code>
              </h1>
            </div>

            <div className="left-items-links">
              <a
                href="https://unclebigbay.com/introducing-developer-typing-game-platform-powered-by-the-hern-stack"
                target="_blank"
                rel="noopener noreferrer"
              >
                Features
              </a>
              <a
                href="https://unclebigbay.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Team
              </a>
              <a
                href="https://www.youtube.com/watch?v=25E6FPy9SPc"
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </a>
              <a
                href="https://www.buymeacoffee.com/unclebigbay"
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy Me a coffee
              </a>
              <a
                href="https://unclebigbay.com/introducing-developer-typing-game-platform-powered-by-the-hern-stack"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contribute
              </a>
            </div>
          </section>
          <section className="right-items">
            <div className="right-items-links">
              <Button
                look="custom--btn-outline link-btn"
                label="Start Typing"
                linkUrl={pageurl.LOGIN}
              />

              <Button
                label="create a new account"
                look="link-btn"
                linkUrl={pageurl.REGISTER}
              />
            </div>
          </section>
        </nav>
      </header>
    </React.Fragment>
  );
};
