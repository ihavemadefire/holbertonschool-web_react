import React from 'react';
import image from './close-icon.png';
import { getLatestNotification } from '../utils/utils';
import './Notifications.css'
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

const Notifications = ({ displayDrawer }) => {
  function logOnClick() {
    console.log("Close button has been clicked");
  }

  const payload = {__html: getLatestNotification()};

    return (
      <div>
      <div className="menuItem">Your notifications</div>
      { displayDrawer && (
      <div className="Notifications">
      <button aria-label="Close" onClick={logOnClick} style={{position:'absolute', top: 15, right: 10, visibility: "hidden"}}>
        <img alt="close" src={image} style={{visibility: "visible", height: "15px", width: "15px"}}/>
      </button>
        <p>
          Here is the list of notifications
        </p>
        <ul>
        <NotificationItem type="default" value="New course available"/>
				<NotificationItem type="urgent" value="New resume available"/>
				<NotificationItem type="urgent" html={payload}/>
        </ul>
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
  