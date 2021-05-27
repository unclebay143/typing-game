import React from 'react';
import './overheadnotify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faClipboard } from '@fortawesome/free-solid-svg-icons';

export const OverHeadNotify = () => {
    return (
        <React.Fragment>
            <section className="over-head-notification">
                <div className="social-media--follow">
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
                        href="https://twitter.com/intent/tweet?text=I just scored 123Wpm on"
                    >
                        <abbr title="Make a tweet about us">
                            <FontAwesomeIcon icon={faTwitter} />
                        </abbr>
                    </a>
                    <a 
                        href="https://www.linkedin.com/sharing/share-offsite/?url=unclebigbay.hashnode.dev" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <abbr title="Share on LinkedIn">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </abbr>
                    </a>
                </div>
            </section>
        </React.Fragment>
    )
}
