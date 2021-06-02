import React from 'react';
import './overheadnotify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { GithubStar } from './github-star/GithubStar';

export const OverHeadNotify = () => {
    return (
        <React.Fragment>
            <div className="over-head-notification">

                {/* Project Github star */}
                <section className="github-star-wrapper">
                    <GithubStar />
                </section>

                {/* Social Media Section */}
                <section className="social-media--follow">
                    <a 
                        href="https://www.facebook.com/sharer/sharer.php?u=https://unclebigbay.hashnode.dev" 
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <abbr title="Share to facebook">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </abbr>
                    </a>
                    <a 
                        target="_blank"
                        rel="noopener noreferrer"
                        data-size="large"
                        href="https://twitter.com/intent/follow?screen_name=unclebigbay143"
                    >
                        <abbr title="Follow us on twitter">
                            <FontAwesomeIcon icon={faTwitter} />
                        </abbr>
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/unclebigbay" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <abbr title="Follow us on twitter">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </abbr>
                    </a>
                </section>
            </div>
        </React.Fragment>
    )
}
