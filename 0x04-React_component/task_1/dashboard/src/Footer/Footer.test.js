import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Footer from './Footer';


describe('<Footer />', () => {
    it('Footer renders without crashing', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.exists());
    });
    it('render Footer; checks contents', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.find('footer.App-footer p').text()).contain('Copyright');
        });
});