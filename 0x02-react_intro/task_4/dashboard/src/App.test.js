import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import App from './App';


describe('<App />', () => {
    it('App renders without crashing', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.exists());
    });

    it('renders App-header div', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.contains(<header className="App-header" />))
    });
    it('renders App-body div', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.contains(<header className="App-body" />))
    });
    it('renders App-footer div', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.contains(<header className="App-footer" />))
    });
});