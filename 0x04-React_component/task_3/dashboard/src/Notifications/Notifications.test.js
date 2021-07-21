import React from 'react';
import { shallow } from 'enzyme';
import { getLatestNotification } from '../utils/utils';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

const payload = {
  __html: getLatestNotification(),
};
const listNotifications = [
  {id: 1, type: 'default', value: 'New course available'},
  {id: 2, type: 'urgent', value: 'New resume available'},
  {id: 3, type: 'urgent', html: payload},
];


describe('<Notifications />', () => {
    it('Notifications renders without crashing', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.exists());
    });
    it('renders <Notifications />; checks for 3 list items', () => {
      const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
      expect(wrapper.find(NotificationItem)).toHaveLength(3);
    });
  
    it('renders <Notifications />; verifies text', () => {
      const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
      expect(wrapper.find('.Notifications p')).toHaveLength(1);
      expect(wrapper.find('.Notifications p').text()).toEqual('Here is the list of notifications')
    });
  
    it('renders <Notifications />; verify html of 1st NotificationItem child', () => {
      const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
      expect(wrapper.find(NotificationItem).first().html()).toEqual('<li data-notification-type="default">New course available</li>')
	});
  
    it('check menuItem is being displayed when displayDrawer is false', () => {
      const wrapper = shallow(<Notifications />);
      expect(wrapper.find('.menuItem')).toHaveLength(1);
    });
  
    it('check div.Notifications being displayed when displayDrawer is false', () => {
      const wrapper = shallow(<Notifications />);
      expect(wrapper.find('.Notifications')).toHaveLength(0);
    });
  
    it('check menuItem displayed when displayDrawer is true', () => {
      const wrapper = shallow(<Notifications displayDrawer={true} />);
      expect(wrapper.find('.menuItem')).toHaveLength(1);
    });
  
    it('check div.Notifications is being displayed when displayDrawer is true', () => {
      const wrapper = shallow(<Notifications displayDrawer={true} />);
      expect(wrapper.find('.Notifications')).toHaveLength(1);
    });
});
