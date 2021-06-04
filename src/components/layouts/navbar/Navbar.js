import React from 'react';

// styles
import './navbar.css';

// components
import { Button } from '../button/Button';
import { pageurl } from '../../pageurl';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <React.Fragment>
            <header>
                <nav className="navbar">
                    <section className="left-items">
                        <div className="navbar--brand">
                            <h1><code>&lt;/ Typing&gt;</code></h1>
                        </div>

                        <div className="left-items-links">
                            <a 
                                href="https://unclebay143.github.io/typing-game/"
                                target="_blank"
                                rel="noopener noreferer"
                                >Features</a>
                            <a
                                href="https://unclebigbay.dev/"
                                target="_blank"
                                rel="noopener noreferer"
                            >Team</a>
                            <Link to={pageurl.DASHBOARD}>Demo</Link>
                            <a 
                                href="https://www.buymeacoffee.com/unclebigbay"
                                target="_blank"
                                rel="noopener noreferer"
                            >Buy Me a coffee</a>
                            <a href="/">FAQ</a>
                        </div>
                    </section>
                    <section className="right-items">
                        <div  className="right-items-links">
                            <Button 
                                type="custom--btn-outline"
                                label="Start Typing"
                                linkUrl={pageurl.LOGIN}
                            />

                            <Button 
                                label="create a new account"
                                linkUrl={pageurl.REGISTER}
                            />
                        </div>
                    </section>
                </nav>
            </header>
        </React.Fragment>
    )
}
