import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';


class NotificationItem extends PureComponent {
	render() {
	  const { type, value, html, markAsRead, id } = this.props;
	  return (
		<div>
		  {value ? <li data-notification-type={type} onClick={() => markAsRead(id)}>{value}</li> : null }
		  {html ? <li data-urgent dangerouslySetInnerHTML={{ __html: html }} onClick={() => markAsRead(id)}></li> : null }
		</div>
	  );
	}
  }
NotificationItem.propTypes = {
	type: PropTypes.string.isRequired,
	value: PropTypes.string,
	html: PropTypes.shape({
		__html: PropTypes.string
	})
};
NotificationItem.defaultProps = {
	type: 'default'
};

export default NotificationItem
