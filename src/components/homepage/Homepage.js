import React from 'react';
import { Navbar } from '../layouts/navbar/Navbar';
import './homepage.css';
import { AnnouncementCircle } from './announcementCircle/AnnouncementCircle';

export const Homepage = () => {
    return (
        <React.Fragment>
            <div className="home">
                <Navbar />
                <AnnouncementCircle />
            </div>
        </React.Fragment>
    )
}
