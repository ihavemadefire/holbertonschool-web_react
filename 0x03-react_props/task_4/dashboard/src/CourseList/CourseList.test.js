import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

describe('<CourseList />', () => {
    it('renders <CourseList /> component', () => {
        const wrapper = shallow(<CourseList />);
        expect(wrapper).toHaveLength(1);
        expect(wrapper.exists()).toBe(true);
	});
    it('renders <CourseList />; verifies 5 rows', () => {
        const wrapper = shallow(<CourseList />);
    });
});
