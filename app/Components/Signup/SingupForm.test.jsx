import React from 'react';
import { Provider } from 'react-redux';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import configureStore from 'redux-mock-store';
import sinon from 'sinon';
import SignupFormConnected, {
    validate, SignupForm,
} from './SignupForm';
import floatingLabelField from '../FloatingLabel/FloatingLabel';

describe('Test suits for <signupform />', () => {
    let component;
    let wrapperRedComp;
    const handleSubmit = sinon.spy();
    // const handleSubmitMock = () => ({ email: 'test@test.com', password: 'password@123' });
    const onSubmitCall = sinon.spy();

    const verifyCallback = sinon.spy();
    const callback = sinon.spy();
    const checkDomain = sinon.spy();
    const handleChecked = sinon.spy();
    const handlePasswrdChange = sinon.spy();
    const props = {
        actions:
        {
            verifyCallback, callback, checkDomain, handleChecked, handlePasswrdChange,
        },
    };

    const shallowWrapper = shallow(
        <SignupForm handleSubmit={() => {}} {...props} />,
    );
    const mockStore = configureStore([]);
    const store = mockStore({
        context: { deviceType: { isDesktop: false } },
    });
    beforeEach(() => {
        wrapperRedComp = shallow(<SignupForm
            handleSubmit={handleSubmit}
            submitCase={onSubmitCall}
        />);
        component = mount(
            <Provider store={store}>
                <SignupFormConnected
                    submitCase={handleSubmit} />
            </Provider>,
        );
        // todo temporary hack ajay - referencing dom directly is not a good approach use setstate to dynamically add classes instead of this approach
        ['length', 'special', 'capital']
            .forEach(id => {
                const p = global.document.createElement('p');
                p.id = id;
                global.document.body.appendChild(p);
            });
    });
    afterEach(() => {
        component.unmount();
    });
    it('Check if the wrapper component exist', () => {
        expect(component).to.exist;
    });
    it('Check if the werapper component exist', () => {
        expect(wrapperRedComp).to.exist;
    });

    it('renders an error message for the input', () => {
        const input = { name: 'email' };
        const label = 'Email';
        const meta = { touched: true, error: 'Required' };
        const type = 'email';
        const element = floatingLabelField({
            label, type, input, meta,
        });
        mount(element);
    });

    it('inValid Email', () => {
        const aptError = validate({ email: '' });
        expect(aptError.email).to.equal('Required');
    });

    it('inValid Password', () => {
        const aptError = validate({ password: '' });
        expect(aptError.password).to.equal('Required');
    });

    it('inValid Email', () => {
        const aptError = validate({ email: 'Overstock@' });
        expect(aptError.email).to.equal('Please Enter a Valid Email');
    });

    it('Valid Email', () => {
        const aptError = validate({ email: 'Overstock@gmail.com' });
        expect(aptError.email).to.equal(undefined);
    });

    it('Valid password-test', () => {
        const aptError = validate({ password: 'Overstock!' });
        expect(aptError.password).to.equal(undefined);
    });

    it('Valid password-test', () => {
        const aptError = validate({ password: 'oversto' });
        expect(aptError.password).to.equal(undefined);
    });

    it('Valid password-test', () => {
        const aptError = validate({ password: 'Overstock123!gmail' });
        expect(aptError.password).to.equal(undefined);
    });

    it('inValid password-test', () => {
        const aptError = validate({ password: 'overstock' });
        expect(aptError.password).to.equal(undefined);
    });

    it('handleChecked should be invoked without values', () => {
        const change = sinon.spy();
        shallowWrapper.setProps({ change });
        shallowWrapper.instance().handleChecked({ target: { checked: true } });
    });

    it('handleChecked should be invoked', () => {
        const change = sinon.spy();
        shallowWrapper.setProps({ change, emailId: 'test@test.com' });
        shallowWrapper.instance().handleChecked({ target: { checked: true } });
        expect(change.calledOnce).to.be.true;
    });

    it('handleChecked should be invoked with .gov', () => {
        const change = sinon.spy();
        shallowWrapper.setProps({ change, emailId: 'test@test.gov' });
        shallowWrapper.instance().handleChecked({ target: { checked: true } });
        expect(change.calledOnce).to.be.false;
    });

    it('handleChecked should be invoked but handleChecked false', () => {
        const change = sinon.spy();
        shallowWrapper.setProps({ change, emailId: 'test@test.com' });
        shallowWrapper.instance().handleChecked({ target: { checked: false } });
        expect(change.calledOnce).to.be.false;
    });

    it('Submit the form', () => {
        shallowWrapper.setProps({ emailId: 'test@test.com', password: 'Overstock!' });
        component.find('form').at(0).props().onSubmit();
    });

    it('funtion 1 should be invoked', () => {
        shallowWrapper.instance().verifyCallback();
    });

    it('funtion callback should be invoked', () => {
        shallowWrapper.instance().callback();
    });

    it('messagePwd has display block', () => {
        expect(shallowWrapper.find('#messagePwd').length).to.equal(1);
        console.log(shallowWrapper.find('#messagePwd').length);
    });
});
