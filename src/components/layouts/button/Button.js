import React from 'react';
import PropTypes from 'prop-types';
import './button.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";


export const Button = (props) => {
    const { icon, label, type, size, linkUrl} = props;
    return (
        <React.Fragment>
                <button
                    className={`button custom--btn ${type} ${size}`}
                >
                    <Link
                        to={linkUrl}
                    >
                    {" "}
                        { icon && <FontAwesomeIcon icon={icon}/> }
                    {" "}
                    {label}
                    </Link>
                </button>
        </React.Fragment>
    )
}


Button.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    size: PropTypes.string,
    func: PropTypes.func,
}