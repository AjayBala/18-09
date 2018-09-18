import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Login from './Login';

describe('Test suits for <Login />', () => {
    const shallowWrapper = shallow(<Login />);

    it('Check if the wrapper component exist', () => {
        expect(shallowWrapper).to.exist;
    });

    it('Login page API called and UI should render', () => {
        const instance = shallowWrapper.instance();
        instance.nextPage();
        instance.previousPage();
        });

    it('Login page after render', () => {
        const instance = shallowWrapper.instance();
        instance.nextPage();
        instance.nextPage();
        shallowWrapper.setState({ currentStep: 2 });
    });

    it('To invoke AuthenticationRequired', () => {
                        shallowWrapper.instance().AuthenticationRequired({ isAuthenticationRequired: true });
        expect(this.nextPage()).to.exist;
    });
});
