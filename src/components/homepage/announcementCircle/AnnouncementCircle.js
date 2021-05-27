import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight, faTimes,  } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import './announcement-circle.css';

export const AnnouncementCircle = () => {
    const [closeAnnouncement, setCloseAnnouncement] = useState(false)
    return (
        <React.Fragment>
            <section className={`announcement-circle ${closeAnnouncement && "close-circle"}`}>
                <div className="announcement-circle--content">
                    <h1>Join unclebigbay, grace and 100+ developers improving their typing speed.</h1>
                    <div className="lets-go">
                        <h1>
                            <a href="#">Let's go</a> 
                        </h1>
                        <FontAwesomeIcon className="lets-go-icon" icon={faArrowAltCircleRight}/>
                    </div>
                </div>
                <span className="announcement-circle--close" onClick={()=>setCloseAnnouncement(true)}>
                    <FontAwesomeIcon icon={faTimes}/>
                </span>
            </section>
        </React.Fragment>
    )
}
