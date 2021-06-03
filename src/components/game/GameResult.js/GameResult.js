import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import React, { useState } from 'react';
import { RegularButton } from '../../layouts/button/Button';
import './gameresult.css';

export const GameResult = () => {

    const [newRecord, setNewRecord] = useState(false);

    const newRecordMessage = newRecord && (        
        <div className="new-record-heading">
            <span>New record</span>
        </div>
    )

    return (
        <React.Fragment>
            <div className="result-container">
                {/*  */}
                <section className="">
                    <div className="result-heading">
                        <h1>Typing Result 😀</h1>
                    </div>

                </section>

                {/* SCORE POINTS     */}
                <section className="result-body">
                    <div className="heading">
                        <span>WPM</span>
                        <span>ACCURACY</span>
                    </div>
                    <div className="point-heading">
                        <span>22</span>
                        <span>50%</span>
                    </div>
                </section>

                {/*  */}
                <section className="share-point">
                    <RegularButton
                        type="custom--btn-outline twitter-share-button"
                        target="_blank"
                        rel="noopener noreferrer"
                        linkUrl="https://twitter.com/intent/tweet?text=I just scored 123Wpm {on typing.com by @unclebigbay143}"
                        icon={faTwitter}
                        label="Tweet"
                        abbrTitle="I just scored"
                    >
                        
                    </RegularButton>
                </section>
            </div>
        </React.Fragment>
    )
}
