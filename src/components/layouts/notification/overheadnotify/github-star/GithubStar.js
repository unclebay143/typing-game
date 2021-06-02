import React from 'react';
import GitHubButton from 'react-github-btn';
import './github-star.css';


export const GithubStar = () => {
    return (
        <React.Fragment>
            <GitHubButton 
                href="https://github.com/unclebay143/typing-game" 
                data-color-scheme="no-preference: dark_dimmed; light: dark_dimmed; dark: dark_dimmed;" 
                data-icon="octicon-star"
                data-show-count="true" 
                aria-label="Star unclebay143/typing-game on GitHub"
            >
                Star
            </GitHubButton>
        </React.Fragment>
    )
}
