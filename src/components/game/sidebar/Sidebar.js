import { faCloud, faHome, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { pageurl } from '../../pageurl';
import { AudioPlayer } from '../music/AudioPlayer';
import './sidebar.css';


export const Sidebar = ({themeCallback}) => {
    const [darkTheme, setDarkTheme] = useState(false);
    const location = useLocation();
    const [showHomeButton, setShowHomeButton] = useState(false);
    let prefferedTheme = localStorage.getItem("_dark_theme");

    // check if the current path is the dashboard
    const currentPageNotDashboard = location.pathname === pageurl.DASHBOARD ? false : true;

    console.log(currentPageNotDashboard);
    useEffect(() => {
        setDarkTheme(prefferedTheme)

        // If the current page is not dashboard
        if(currentPageNotDashboard){
            setShowHomeButton(true)
        }else{
            // If the current page is dashboard, hide the icon
            setShowHomeButton(false)
        }

        // themeCallback(prefferedTheme)
    }, [prefferedTheme, currentPageNotDashboard])

    const handleThemeSwitch = () =>{
        // CHECK THE LOCALSTORAGE FOR USER'S PREVIOUS THEME
        localStorage.setItem("_dark_theme", !darkTheme);
        // UPDATE THE SIDEBAR STATE FOR ICON SWITCH
        setDarkTheme(!darkTheme)
        // UPDATE THE CALLBACK - GameArea
        themeCallback(!darkTheme)
    }

    return (
        <React.Fragment>
            <aside className="sidebar">
                <section className="sidebar-items-top">
                    <div className="select-pro-language">
                        <select className="form-control d-none">
                            <option>javascript</option>
                            <option>html</option>
                            <option>css</option>
                        </select>
                    </div>

                    {

                        showHomeButton && (
                            <div className="navigation-icon">
                                <Link to={pageurl.DASHBOARD}>
                                    <FontAwesomeIcon icon={faHome}/>
                                </Link>
                            </div>
                        )
                    }
                </section>

                <section className="sidebar-items-down">
                    <AudioPlayer />
                    <div className="theme-toggle">
                        <FontAwesomeIcon icon={darkTheme ? faCloud : faSun } onClick={handleThemeSwitch}/>
                    </div>
                    <div to={pageurl.GAMERESULT} className="profile-image">
                        <img src="https://github.com/unclebay143.png" alt="player profile"/>
                    </div>
                </section>
            </aside>
        </React.Fragment>
    )
}
