import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('<Footer />', () => {
  it('renders a <Footer /> component', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toHaveLength(1);
	});


	it('render Footer; checks contents', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('footer.App-footer p').text()).toContain('Copyright');
	});
});