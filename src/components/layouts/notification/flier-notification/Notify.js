import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CLEAR_NOTIFICATION } from "../../../../redux/types";
import "./notify.css";

export const NotifyPlayer = () => {
  const { notification } = useSelector((state) => state.user);
  const [notificationMessage, setNotificationMessage] = useState(null);
  const { url, urlLabel, message, moreUrl } = notificationMessage || {};
  const { url1, url1Label } = moreUrl || {};
  const dispatch = useDispatch();

  const convertUrl1 = (
    <Link class="black-link" to={url1}>
      {url1Label}
    </Link>
  );

  useEffect(() => {
    if (notification) {
      setNotificationMessage(notification);
    }
  }, [notification]);
  return (
    <React.Fragment>
      {notification && (
        <div className="notify-container">
          <section className="notify-content">
            <p className="">
              <Link to={url}>{urlLabel}</Link> {message}
              {convertUrl1}
            </p>

            <span
              className="close--notify"
              onClick={() => dispatch({ type: CLEAR_NOTIFICATION })}
            >
              No, thanks
            </span>
          </section>
        </div>
      )}
    </React.Fragment>
  );
};
