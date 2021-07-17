import React from 'react';
import image from './close-icon.png';
import { getLatestNotification } from '../utils/utils';
import './Notifications.css'
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from "./NotificationItemShape";

const Notifications = ({ displayDrawer, listNotifications}) => {
  function logOnClick() {
    console.log("Close button has been clicked");
  }

  const payload = {__html: getLatestNotification()};

    return (
      <div>
        <div className="menuItem">Your notifications</div>
        { displayDrawer && (
          <div className="Notifications">
            { listNotifications ? ( 
              <div>
              <button aria-label="Close" onClick={logOnClick} style={{position:'absolute', top: 15, right: 10, visibility: "hidden"}}>
                <img alt="close" src={image} style={{visibility: "visible", height: "15px", width: "15px"}}/>
              </button>
              <p>Here is the list of notifications</p>
              <ul>
                {listNotifications.map((notification) => (
                  <NotificationItem key={notification.id} type={notification.type} value={notification.value} html={notification.html} />
                ))}
              </ul>
            </div>) : <p>No new notification for now</p>}
          </div>
        )}
      </div>
    );
  }
  Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
  };
  Notifications.defaultProps = {
    displayDrawer: false,
  };

export default Notifications;
  