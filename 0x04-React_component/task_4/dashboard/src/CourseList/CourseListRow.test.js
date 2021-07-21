import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('<CourseListRow />', () => {
    it('renders <CourseListRow />', () => {
        const wrapper = shallow(<CourseListRow textFirstCell="First cell text"/>);
        expect(wrapper).toHaveLength(1);
	});
    it('renders <CourseListRow />; isHeader={true} and textSecondCell=null', () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="First Cell" />);
        expect(wrapper.find('th')).toHaveLength(1);
        expect(wrapper.find('th').get(0).props.colSpan).toEqual(2);
        expect(wrapper.find('th').get(0).props.children).toEqual('First Cell');
    });
	it('renders <CourseListRow />; isHeader={true} and textSecondCell has content', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="First Cell" textSecondCell="Second Cell"/>);
		expect(wrapper.find('th')).toHaveLength(2);
		expect(wrapper.find('th').get(0).props.children).toEqual('First Cell');
		expect(wrapper.find('th').get(1).props.children).toEqual('Second Cell');
	});
	it('renders <CourseListRow />; isHeader={false} by default', () => {
    const wrapper = shallow(<CourseListRow textFirstCell="First Cell"/>);
		expect(wrapper.find('tr td')).toHaveLength(2);
	});
});