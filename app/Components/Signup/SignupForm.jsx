import React, { Component } from 'react';
import {
    ControlLabel, FormGroup, Button,
} from 'react-bootstrap';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { bindActionCreators } from 'redux';
import './Signup.scss';
import Recaptcha from 'react-recaptcha';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import history from '../../history';
import * as LoginAction from '../../actions/LoginAction';
import floatingLabelField from '../FloatingLabel/FloatingLabel';
import { validateEmail, validatePassword } from '../../common/Utils';

export const validate = values => {
    const error = {};

    const emailError = validateEmail(values);
    if (emailError) {
        error.email = emailError;
    }

    let length = document.getElementById('length');
    let capital = document.getElementById('capital');
    let special = document.getElementById('special');

    const errorObj = validatePassword(values, length, capital, special);
    if (errorObj.error) {
        error.password = errorObj.error;
        length = errorObj.length;
        capital = errorObj.capital;
        special = errorObj.special;
    }

   return error;
};


export class SignupForm extends Component {
    constructor() {
        super();
        this.state = {
            recaptchaVerified: false,
            hasGovEmail: false,
            isGovEmail: false,
        };
        this.qualifiedGovId = ['.gov', '.mil', '.state', '.edu'];
    }

    verifyCallback = () => {
        this.setState({
            recaptchaVerified: true,
        });
    }

    checkDomain = values => {
        const { email } = values;
        let getDomain = null;
        if (email) {
            getDomain = email.substring(email.lastIndexOf('.'));

            return getDomain.toLowerCase();
        }

        return getDomain;
    }

    handleChecked = value => {
        const { change, emailId } = this.props;
        let isGovEmail = false;
        if (value.target.checked) {
            const getDomain = this.checkDomain({ email: emailId });
            if (!this.qualifiedGovId.includes(getDomain)) {
                change('email', '');
                isGovEmail = true;
            }
        } else if (!value.target.checked) {
            isGovEmail = false;
        }
        this.setState({
            hasGovEmail: isGovEmail,
            isGovEmail: value.target.checked
        });
    };

    handleClick = e => {
        const { change, checkboxState, emailId } = this.props;
        const getDomain = this.checkDomain({ email: emailId });

        if (getDomain && !this.qualifiedGovId.includes(getDomain) && checkboxState) {
            change('email', '');
            e.preventDefault();
            this.setState({
                hasGovEmail: true,
            });
        }
    }

    callback = () => console.log('Recaptcha loaded');

    render() {
        const { handleSubmit } = this.props;
        const { recaptchaVerified, hasGovEmail, isGovEmail } = this.state;
        const domMessagePwd = document.getElementById('messagePwd');

        const handlePagesOnSubmit = values => {
            const { actions } = this.props;
            const getDomain = this.checkDomain(values);
            actions.loginValues(values);
            if (this.qualifiedGovId.includes(getDomain)) {
                history.push('/gov');
            } else {
                history.push('/com');
            }
        };

        return (

            <div className="formWrap signupFormWrap">
                <form onSubmit={handleSubmit(handlePagesOnSubmit)}>
                    <Field
                        name="email"
                        type="text"
                        component={floatingLabelField}
                        label={hasGovEmail
                            ? 'Enter government email ID' : 'Email'}
                        id="email"
                        onBlur={this.handleClick}/>
                    <Field
                        name="password"
                        type="password"
                        component={floatingLabelField}
                        label="Create Password"
                        id="pswd"
                        onFocus={() => {
                            domMessagePwd.style.display = 'block';
                        }}/>
                    <div id="messagePwd">
                        <p id="length">
                            ✔ 8 characters minimum
                        </p>
                        <p id="capital">
                            ✔ At least 1 capital letter
                        </p>
                        <p id="special">
                            ✔ At least 1 special character (!,*,$,@)
                        </p>
                    </div>
                    <FormGroup className="formRowWrap">
                        <ControlLabel className="label-styles">
                            Select only if applicable to your business
                        </ControlLabel>
                        <Field
                            name="checkbox"
                            type="checkbox"
                            checked={isGovEmail}
                            component="input"
                            className="checkbox-overrides"
                            onChange={this.handleChecked} />
                        <span className="checkbox-labelStyle">
                            I work for a government entity and I
                            have a government email
                        </span>
                    </FormGroup>
                    <FormGroup className="formRowWrap">
                        <Recaptcha
                            className="rca-styles"
                            sitekey="6LfKaWoUAAAAAJDt-nKlTsZ92TkprXJ2xqgZ-YND"
                            render="explicit"
                            verifyCallback={this.verifyCallback}
                            onloadCallback={this.callback}
                        />
                    </FormGroup>
                    <div className="form-group formRowWrap">
                        <Button
                            type="submit"
                            className="btnBlueStyle createAccBtn"
                            disabled={!recaptchaVerified}>
                        Sign Up
                        </Button>
                    </div>
                </form>
            </div>
        );
    }
}

SignupForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    change: PropTypes.func.isRequired,
    emailId: PropTypes.string,
    checkboxState: PropTypes.bool,
    actions: PropTypes.objectOf(PropTypes.func)
};


const SignUp = reduxForm({
    form: 'SignupForm',
    validate,
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true
})(SignupForm);

const selector = formValueSelector('SignupForm');
const mapStateToProps = state => ({
    emailId: selector(state, 'email'),
    checkboxState: selector(state, 'checkbox'),
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Object.assign(LoginAction), dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
