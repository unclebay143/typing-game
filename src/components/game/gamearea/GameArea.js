import React, { useEffect, useState } from 'react';
import './gamearea.css';

// COMPONENTS
import { TypingBoard } from '../typingboard/TypingBoard';
import { Sidebar } from '../sidebar/Sidebar';
import { GameResult } from '../GameResult.js/GameResult';
import { Route, Switch } from 'react-router';
import { pageurl } from '../../pageurl';

export const GameArea = () => {
    // STATE TO BE PASSED TO SIDEBAR FOR TOGGLE
    let prefferedTheme = localStorage.getItem("_dark_theme");
    const [darkTheme, setDarkTheme] = useState(prefferedTheme)
    useEffect(() => {
        setDarkTheme(prefferedTheme)
    }, [prefferedTheme])

    return (
        <React.Fragment>
            <main className={`game-container ${darkTheme ? "dark" : "light-mode"}`}>
                <Switch>
                    <Route path={pageurl.GAMERESULT} component={GameResult}/>
                    <Route path={pageurl.DASHBOARD} component={TypingBoard}/>
                </Switch>
            </main>
            <Sidebar themeCallback={setDarkTheme}/>
        </React.Fragment>
    )
}
