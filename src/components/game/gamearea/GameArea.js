import React from 'react';
import './gamearea.css';

// COMPONENTS
import { TypingBoard } from '../typingboard/TypingBoard';

export const GameArea = () => {
    return (
        <React.Fragment>
            <main className="game-container">
                <TypingBoard />
            </main>
        </React.Fragment>
    )
}
