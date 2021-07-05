import React from 'react';
import image from './close-icon.png';
import { getLatestNotification } from '../utils/utils';
import './Notifications.css'

export function Notifications() {
  function logOnClick() {
    console.log("Close button has been clicked");
  }

    return (
      <div className="Notifications">
      <button aria-label="Close" onClick={logOnClick} style={{position:'absolute', top: 15, right: 10, visibility: "hidden"}}>
        <img alt="close" src={image} style={{visibility: "visible", height: "15px", width: "15px"}}/>
      </button>
        <p>
          Here is the list of notifications
        </p>
        <ul>
          <li data-priority='default'>New course available</li>
          <li data-priority='urgent'>New resume available</li>
          <li data-priority="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification()}} />
        </ul>
      </div>
    );
  }
  