import React from "react";
import PropTypes from "prop-types";
import "./button.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const Button = (props) => {
  const { icon, label, look, size, linkUrl, func, abbrTitle } = props;
  return (
    <React.Fragment>
      <button className={`button custom--btn ${look} ${size}`} onClick={func}>
        {linkUrl && (
          <abbr title={abbrTitle}>
            <Link to={linkUrl}>
              {" "}
              {icon && <FontAwesomeIcon icon={icon} />} {label}
            </Link>
          </abbr>
        )}
      </button>
    </React.Fragment>
  );
};

export const RegularButton = (props) => {
  const { icon, label, look, size, linkUrl, func, abbrTitle, target } = props;
  return (
    <React.Fragment>
      <button className={`button custom--btn ${look} ${size}`} onClick={func}>
        <abbr title={abbrTitle}>
          <a href={linkUrl} target={target}>
            {" "}
            {icon && <FontAwesomeIcon icon={icon} />} {label}
          </a>
        </abbr>
      </button>
    </React.Fragment>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  look: PropTypes.string,
  size: PropTypes.string,
  func: PropTypes.func,
};
