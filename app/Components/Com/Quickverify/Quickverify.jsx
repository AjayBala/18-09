import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import './Quickverify.scss';
import floatingLabelField from '../../FloatingLabel/FloatingLabel';
import { normalizeZip, normalizeCard,
     validateYear, validateMonth } from '../../../common/Utils';

export const validate = values => {
    const errors = {};

    const yearError = validateYear(values);
    if (yearError) {
        errors.year = yearError;
    }

    const monthError = validateMonth(values);
    if (monthError) {
        errors.month = monthError;
    }

    return errors;
};

class QuickVerify extends Component {
    constructor(props) {
        super(props);
        this.state = {
            property: props,
            isFocused: false,
        };
    }

    changeButton = eve => {
        if (eve.target.value === '') {
            console.log(FormQuickValue);
            this.setState({
                isFocused: false,
            });
        } else {
            this.setState({
                isFocused: true,
            });
            console.log(FormQuickValue);
        }
    };

    render() {
        const { property, isFocused } = this.state;
        const { handleSubmit, submitting, previousPage } = property;

return (
    <div className="QuickVerifyWrap">
        <div className="">
            <h3> Get Verified Quicker (Optional) </h3>
            <p>

Business Credit Card:If you have one,it helps us verify your account even faster.
                <b> Your card will not be charged.</b>
            </p>
        </div>
        <div className="QuickVerifyOutterWrap">
            <form onSubmit={handleSubmit} className="form-style" onChange={this.changeButton}>
                <Field
                    name="name"
                    type="text"
                    label="Name on Card"
                    component={floatingLabelField} />
                <Field
                    name="number"
                    type="number"
                    label="Card Number"
                    component={floatingLabelField} />
                <Row>
                    <Col lg={4} sm={4} className="expmonth" >
                        <Field
                            name="month"
                            type="number"
                            label="MM"
                            component={floatingLabelField}
                            normalize={normalizeCard} />
                    </Col>
                    <Col lg={4} sm={4} >
                        <Field
                            name="year"
                            type="number"
                            component={floatingLabelField}
                            label="YYYY" />
                    </Col>
                    <Col lg={4} sm={4}>
                        <Field
                            name="cvnumber"
                            type="password"
                            component={floatingLabelField}
                            label="CVV" />
                    </Col>
                </Row>
                <Field name="address" type="text" component={floatingLabelField} label="Street Address" />
                <Row>
                    <Col lg={5} sm={5}>
                        <Field
                            name="City"
                            component={floatingLabelField}
                            label="State" />
                    </Col>
                    <Col lg={3} sm={3}>
                        <Field
                            name="State"
                            type="text"
                            component={floatingLabelField}
                            label="City" />
                    </Col>
                    <Col lg={4} sm={4} className="zip">
                        <Field
                            name="Zip"
                            type="text"
                            component={floatingLabelField}
                            label="Zip"
                            normalize={normalizeZip}/>
                    </Col>
                </Row>
                <div className="formBtnWrap">
                    <button className="formBtn" type="submit" onClick={previousPage} >Back</button>
                    <button className="formBtn" type="submit" disabled={submitting}>{isFocused ? 'Next' : 'Skip for Now'}</button>
                </div>
            </form>
        </div>
    </div>
        );
    }
}

export default reduxForm({
    form: 'Com',
    validate,
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
})(QuickVerify);
