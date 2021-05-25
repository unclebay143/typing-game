import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

export const Button = (props) => {
    const { label, type, size } = props;
    return (
        <React.Fragment>
            <button className={`custom--btn ${type} ${size}`}>{label}</button>
        </React.Fragment>
    )
}


Button.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    size: PropTypes.string,
}