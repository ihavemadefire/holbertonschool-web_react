import React, { Component } from 'react';
import image from './close-icon.png';
import './Notifications.css'
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from "./NotificationItemShape";


class Notifications extends Component {
  constructor(props) {super(props);
  this.markAsRead = this.markAsRead.bind(this);
  }

  static propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape)
  }

  static defaultProps = {
    displayDrawer: false,
    listNotifications: [],
  };

  shouldComponentUpdate(nextProps) {
    (nextProps.listNotifications.length > this.props.listNotifications.length) ?
    true : false;
  }

  clickClose() {
    console.log("Close button has been clicked");
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }
  render() {
    return (
      <div>
        <div className="menuItem">Your notifications</div>
        { this.props.displayDrawer && (
          <div className="Notifications">
            { this.props.listNotifications ? ( 
              <div>
              <button aria-label="Close" onClick={logOnClick} style={{position:'absolute', top: 15, right: 10, visibility: "hidden"}}>
                <img alt="close" src={image} style={{visibility: "visible", height: "15px", width: "15px"}}/>
              </button>
              <p>Here is the list of notifications</p>
              <ul>
                  {this.props.listNotifications.map((notification) => (
                    <NotificationItem
                      key={notification.id}
                      type={notification.type}
                      value={notification.value}
                      html={notification.html}
                      markAsRead={() => {this.markAsRead(notification.id)}}/>
                ))}
              </ul>
            </div>) : <p>No new notification for now</p>}
          </div>
        )}
      </div>
    );
  };
}
export default Notifications;
  