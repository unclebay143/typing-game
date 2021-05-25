import React from 'react';
import './announcement-circle.css';

export const AnnouncementCircle = () => {
    return (
        <React.Fragment>
            <section className="announcement-circle">
                <div className="announcement-circle--content">
                    <h1>Join unclebigbay, grace and 100+ developers improving their typing speed.</h1>
                    <h1 className="lets-go"><a href="#">Let's go</a></h1>
                </div>
                <span className="announcement-circle--close">X</span>
            </section>
        </React.Fragment>
    )
}
