import React from "react";
import GitHubButton from "react-github-btn";
import "./github-star.css";

export const GithubStar = () => {
  return (
    <React.Fragment>
      <GitHubButton
        href="https://github.com/unclebay143/typing-game"
        data-icon="octicon-star"
        data-show-count="true"
        aria-label="Star unclebay143/typing-game on GitHub"
        data-size="large"
      >
        {/* Star */}
      </GitHubButton>
    </React.Fragment>
  );
};
