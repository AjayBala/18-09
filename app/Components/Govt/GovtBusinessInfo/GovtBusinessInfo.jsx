import React, { Component } from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Row, Col, ControlLabel } from 'react-bootstrap';
import './GovtBusinessInfo.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { categorys } from '../../../common/Constants';
// import history from '../../../history';
import loginAction from '../../../actions/LoginAction';
import floatingLabelField from '../../FloatingLabel/FloatingLabel';
import { validateEmail, required } from '../../../common/Utils';

export const validate = values => {
    const error = {};

    const emailError = validateEmail(values);
    if (emailError) {
        error.email = emailError;
    }

return error;
};


export const renderField = ({
    placeholder, input, label, type, meta: { touched, error },
}) => (
    <div className="form-group">
        <ControlLabel className="labelTxt">{label}</ControlLabel>
        <input
            {...input}
            placeholder={placeholder}
            type={type}
            className="form-control SqaureText" />
        {touched && ((error && (<span className="errorTxt">{error}</span>)))}
    </div>
);

export const renderDropDown = ({ label, input, meta: { touched, error } }) => (
    <div className={input.value === ''
        ? 'form-group' : 'form-group labelActive'}>
        <div className={touched
            && error ? 'floatLabelWrap errorBorder' : 'floatLabelWrap'}>
            <select {...input} className="inputTxtStyle">
                <option value="" disabled />
                {categorys.map(obj => (
                    <option value={obj.value} key={obj.id}>
                        {obj.value}
                    </option>
                ))}
            </select>
            <ControlLabel className="labelTxt">{label}</ControlLabel>
            {touched && error && <span className="error_text">{error}</span>}
        </div>
    </div>
);

class govtBusinessInfo extends Component {
    render() {
        const { handleSubmit, submitting } = this.props;

        return (
            <div className="formOutterWrap">
                <Row>
                    <Col lg={12} sm={12}>
                        <p className="GovHeaderTxtWrap">
                            <b> Tell us about your organization</b>
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} sm={12} >
                        <form
                            onSubmit={handleSubmit}
                            className="Com-form-style">
                            <ul className="formListWrap">
                                <li>
                                    <Field
                                        name="comName"
                                        type="text"
                                        label="Your Full Name*"
                                        component={floatingLabelField}
                                        validate={required} />
                                </li>
                                <li>
                                    <Field
                                        name="email"
                                        type="text"
                                        label="Email*"
                                        component={floatingLabelField}
                                        validate={required} />
                                </li>
                                <li>
                                    <Field
                                        name="categorys"
                                        className="categorys"
                                        component={renderDropDown}
                                        label="Organization
                                            Category (optional)" />
                                </li>
                                <li>
                                    <Field
                                        name="agencyName"
                                        type="text"
                                        label="Agency Name*"
                                        component={floatingLabelField}
                                        validate={required} />
                                </li>
                                <li>
                                    <div className="form-group">
                                        <ControlLabel>
                                            <input type="checkbox"/>
I am a non-profit 501(c) organization
                                        </ControlLabel>
                                    </div>
                                </li>
                            </ul>
                            <div className="formBtnWrap">
                                <button
                                    className="formBtn"
                                    type="submit"
                                    disabled={submitting}>
Next
                                </button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </div>
        );
    }
}

govtBusinessInfo.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
};

const GovtBusinessPage = reduxForm({
    form: 'Govt', // a unique identifier for this form
    validate,
    destroyOnUnmount: false, // <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
})(govtBusinessInfo);


const selector = formValueSelector('Govt');

const mapStateToProps = state => ({
    CategoryValue: selector(state, 'categorys'),
    initialValues:
     { email: state.login.userValues ? state.login.userValues.email : '' },

});

const matchDispatchToProps = dispatch => ({
    actions: bindActionCreators(Object.assign(
        loginAction,
    ), dispatch),
});

export default connect(mapStateToProps, matchDispatchToProps)(GovtBusinessPage);
