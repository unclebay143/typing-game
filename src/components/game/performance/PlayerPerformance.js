import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import "./playerperformance.css";

export const PlayerPerformance = ({wpm, accuracy}) => {
    const [togglePerformance, setTogglePerformance] = useState(false)
  
    return (
        <React.Fragment>
            <section className={`typist-performance ${togglePerformance && "collapse-typist-performance"}`} onClick={(()=>setTogglePerformance(!togglePerformance))}>
                <div className="rank-info">
                    <FontAwesomeIcon icon={faStar}/>
                    <span className="position">2</span>
                </div>
                <div className="current-performance">
                    <span className="wpm">WPM: {wpm} </span> | <span className="accuracy"> ACC: {accuracy}%</span>
                </div>
                <div className={`full-performance ${togglePerformance && "display-full-performance"}`}>
                    <p>WPM:</p>
                    <p>ACCURACY:</p>
                </div>
            </section>
        </React.Fragment>
    )
}
