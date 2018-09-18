import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import LoginAuth from './LoginAuth';

describe('Test suits for <LoginAuth />', () => {
    const shallowWrapper = shallow(<LoginAuth />);
    const location = { pathname: '/loginAuth' };

    it('Check if the wrapper component exist', () => {
        expect(shallowWrapper).to.exist;
});
it('should render the component items properly , to check twostep_auth_wrap is available', () => {
    const wrapper = shallow(<LoginAuth location={location}/>);
    expect(wrapper.find('.twostep_auth_wrap')).to.exist;
});
});
