import React, { useState } from 'react';
import './top-players.css';
// import wavingHand from './../../../assets/img/waving-hand.gif';

// FONT-AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

// LAYOUT
import { Button, RegularButton } from '../../layouts/button/Button';

const topPlayers = (
    <div className="top-player">
        <div className="left-info">
            <div className="top-player--image">
                <img src="http://github.com/unclebay143.png" alt="top player avatar"/>
            </div>
            <div className="player-information">
                <h3 className="player-name">Ayodele Samuel Adebayo</h3>
                <div className="player-details">
                    <div className="player-star">
                        <FontAwesomeIcon icon={faStar} className="checked-rank"/>
                        <FontAwesomeIcon icon={faStarHalfAlt} className="checked-rank"/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                    </div>
                    <p className="score-time"> 123wpm - 2 days ago</p>
                </div>
            </div>
        </div>
        <div className="right-info">
            <RegularButton
                linkUrl="https://www.twitter.com/unclebigbay143"
                type="custom--btn-touch"
                label="Twitter"
                icon={faTwitter}
                target="_blank"
            />
        </div>
    </div>
)


export const TopPlayers = () => {
    const [showAll, setShowAll] = useState(false)
    const top10 = new Array(showAll ? 10 : 3).fill(topPlayers)

    console.log(showAll);
    const handleShowAll = () =>{
        console.log("ss");
        return setShowAll(!showAll)
    }
    return (
        <React.Fragment>
            <section className="rank-section">
                <div className="welcome-user">
                    <div className="greeting-text">
                        <h2>How is coding today?</h2>
                        {/* <h2>Welcome back</h2> when logged in*/}
                    </div>
                    {/* <img src={wavingHand} alt="waving hand"/> */}
                </div>
                <div className="rank-board">
                    <div className="rank-board--heading">
                        <h3>Top 10 Fastest Typist</h3>
                    </div>
                    <div className="ranking">
                      {top10}
                    </div>
                    <div className="board-toggler">
                        <Button 
                            func={handleShowAll}
                            label={`${showAll ? "Show less" : "Show more"}` }
                            type="custom--btn-outline-primary"
                        />
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
