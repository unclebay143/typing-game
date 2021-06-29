import React, { useState } from "react";
import "./share-buttons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import { copyToClipBoard } from "../../_helper/clipBoard/copyToClipBoard";

export const ShareButtons = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    // get the input that conatins the caption
    const copyText = document.querySelector(".media-caption");
    // invoke the copy function
    copyToClipBoard(copyText);
    setCopied(true);
  };
  return (
    <React.Fragment>
      <section className="social-media-share">
        <h1>Help Us Reach More Audience.</h1>
        <div>
          <input
            className="media-caption"
            value="Checkout developer typing game by @unclebigbay143 on https://developer-typing-game.netlify.app/#/"
            hidden
            readOnly
          />
          <abbr title="Copy to clipboard" onClick={() => handleCopy()}>
            <FontAwesomeIcon
              icon={faClipboard}
              className={`${copied && "copied"}`}
            />
          </abbr>
          <a
            href="https://www.facebook.com/sharer/sharer.php?u=https://developer-typing-game.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <abbr title="Share to facebook">
              <FontAwesomeIcon icon={faFacebookF} />
            </abbr>
          </a>
          <a
            className="twitter-share-button"
            target="_blank"
            rel="noopener noreferrer"
            data-size="large"
            href="https://twitter.com/intent/tweet?text=Checkout developer typing game by @unclebigbay143 on https://developer-typing-game.netlify.app/#/"
          >
            <abbr title="Make a tweet about us">
              <FontAwesomeIcon icon={faTwitter} />
            </abbr>
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https://developer-typing-game.netlify.app/"
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
  );
};
