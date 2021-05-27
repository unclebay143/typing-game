import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './popnotify.css';

export const PopNotify = (props) => {
    const { type, message } = props;
    let messageIcon;

    switch (type) {
        case "success":
            messageIcon = faCheck
            break;
        case "danger":
            messageIcon = faTimes
            break;

            default:
            break;
    }
    return (
        <React.Fragment>
            <section className={`pop-notifier ${type}`}>
                <FontAwesomeIcon icon={messageIcon} />
                {message}
            </section>
        </React.Fragment>
    )
}
