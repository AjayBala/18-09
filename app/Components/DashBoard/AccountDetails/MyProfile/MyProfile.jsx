
import React, { Component } from 'react';
import {
    ControlLabel, Col, Row
} from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import floatingLabelField from '../../../FloatingLabel/FloatingLabel';
import './MyProfile.scss';
import axios from 'axios';

export const positiveValue = value => (
    value && value <= 0 ? 'Must be positive values' : undefined);

export const validate = values => {
    const error = {};
    /* eslint max-len: ["error", { "ignoreRegExpLiterals": true }] */
    const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const validEmail = emailPattern.test(values.email);

    if (!values.email) {
        error.email = 'Required';
    } else if (!validEmail) {
        error.email = 'Please Enter a Valid Email';
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

// /* eslint-disable react/prop-types */
// export const FieldFileInput = ({
//     input: { onChange }, label, meta: { touched, error },
// }) => (
//     <div>
//         <ControlLabel>{label}</ControlLabel>
//         <div className="file">
//             <input
//                 type="file"
//                 id="file-input"
//                 accept=".jpg, .png, .jpeg, .pdf, .txt"
//                 onChange={e => onChange(e.target.files[0])} />
//             <ControlLabel htmlFor="file-input">Upload</ControlLabel>
//             {touched && ((error
//                  && (<span className="error_text">{error}</span>)))}
//         </div>
//     </div>
// );

export const phoneChange = (length, event) => {
    const elemtName = event.target.name;
    const value = event.target.value.toString();
    const valueLength = value.length;
    if (valueLength >= length) {
        if (elemtName === 'comPhoneText1') {
            document.getElementsByName('comPhoneText2')[0].focus();
        } else if (elemtName === 'comPhoneText2') {
            document.getElementsByName('comPhoneText3')[0].focus();
        }
    }
    console.log('valueLength###$', valueLength);
    if (valueLength === 0) {
        if (elemtName === 'comPhoneText3') {
            document.getElementsByName('comPhoneText2')[0].focus();
        } else if (elemtName === 'comPhoneText2') {
            document.getElementsByName('comPhoneText1')[0].focus();
        }
    }
};


export const customPhoneField = ({
    maxLength, placeholder, input, type, meta: { touched, error },
}) => (
    <div className="form-group">
        <input
            {...input}
            maxLength={maxLength}
            placeholder={placeholder}
            type={type}
            className="form-control SqaureText"
            onKeyUp={phoneChange.bind(this, maxLength)} />
        {touched && ((error && (<span className="errorPhnTxt">{error}</span>)))}
    </div>
);

class FieldFileInput extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        const { input: { onChange } } = this.props;
        onChange(e.target.files[0]);
    }

    render() {
        const { input: { value } } = this.props;
        const { input, label, required, meta } = this.props; // whatever props you send to the component from redux-form Field

return (
    <div>
        <label>{label}</label>
        <div className="file fileSpace">
            <input
                type="file"
                id="file-input"
                accept=".jpg, .png, .jpeg, .pdf, .txt"
                onChange={this.onChange}
                    />
            <label htmlFor="file-input">change</label>

        </div>
    </div>
        );
    }
}
export const normalizeZip = value => {
    if (!value) {
        return value;
    }
    const onlyNums = value.replace(/[^\d]/g, '');

return onlyNums;
};

const normalizePhone = value => {
    if (!value) {
      return value;
    }

    const onlyNums = value.replace(/[^\d]/g, '');
    if (onlyNums.length <= 3) {
      return onlyNums;
    }
    if (onlyNums.length <= 7) {
      return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3)}`;
    }

return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3, 6)}-${onlyNums.slice(
      6,
      10
    )}`;
  };

// export const onChange = (e) =>{
//     const re = /^[0-9\b]+$/;
//     if (e.target.value == '' || re.test(e.target.value)) {
//        this.setState({value: e.target.value})
//     }
//  }

class MyProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profileName: '',
            property: props,
            isFocused: false,
        };
    }

    changeButton = () => {
        this.setState({
            isFocused: true,
        });
    };

    componentDidMount() {
        axios.get('../../../../data.json')
            .then(res => {
                const profileName = res.data && res.data.Name;
                this.setState({ profileName });
            });
    }

// const MyProfile = props => {
//     const {
//          submitting,
//     } = props;

//     const handleSubmit = () => {
//        alert('Changes Saved Successfully!!');
//     };
render() {
    const { property, isFocused, profileName } = this.state;
    const { handleSubmit, submitting, previousPage } = property;
    
return (

    // return (
        <div>
            <div className="formOutterWrap">
                <form onSubmit={handleSubmit} className="Com-form-style" className="formListWrap" onFocus={this.changeButton}>
                    <Row>
                        <Col lg={6} sm={6} className="hello" >
                            <ul >
                                <Row>
                                    <Col lg={12} sm={12}>
                                    <p className="HeaderTxt_ComBu">
                                    <b>
Edit Profile
                                    </b>
                                </p>
                                </Col>
                                    <Col lg={1} sm={1} >
                                    <i className="fa fa-user-circle userIcon"/>
                                    {' '}
                                </Col>
                                    <Col lg={4} sm={4} >
                                    <div className="fileuploadbuton">
                                    <Field
                                        name="uploadFile"
                                        component={FieldFileInput}

                                    />
                                </div>
                                </Col>

                                </Row>
                                <li>
                                    <Field
                                    name="comName"
                                    type="text"
                                    label="Name"
                                    component={floatingLabelField}
                                    
                                 />
                                </li>
                                {profileName}
                                <li>
                                    <Field
                                    name="email"
                                    type="text"
                                    label="Email"
                                    component={floatingLabelField}
                                 />
                                </li>
                                <li>
                                    <Field
                                    name="profilePhone"
                                    type="text"
                                    label="Phone"
                                    component={floatingLabelField}
                                    normalize={normalizePhone}
                                 />
                                </li>
                                <li>
                                    <Field
                                    name="profileAccount"
                                    type="text"
                                    label="Account type"
                                    component={floatingLabelField}
                                 />
                                </li>
                                <li>
                                    <Field
                                    name="profilePassword"
                                    type="password"
                                    label="Password"
                                    component={floatingLabelField}
                                 />
                                </li>
                                <li>
                                    <Field
                                    name="profileNewPassword"
                                    type="password"
                                    label="New Password"
                                    component={floatingLabelField}
                                 />
                                </li>
                                <li>
                                    <Field
                                    name="profileReNewPassword"
                                    type="password"
                                    label="New Password"
                                    component={floatingLabelField}
                                />
                                </li>
                            </ul>
                        </Col>

                        <Col lg={6} sm={6} className="preferences">
                            <Row>
                                <ul>
                                    <li>
                                    <Col lg={12} sm={12}>
                                    <p className="HeaderTxt_ComBu">
                                                          <b>
Communication preferences
                                    </b>
                                                      </p>
                                </Col>
                                </li>
                                    <li>
                                    <Col lg={12} sm={12}>
                                    <Row>
                                        <Col lg={6} sm={6}>
                                        <h4>

Promotional mail

                                    </h4>
                                    </Col>
                                        <Col lg={6} sm={6}>
                                        <i className="fa fa-toggle-on profileToggle" />
                                    </Col>
                                    </Row>
                                    <p>

Sign up and receive exclusive email offers. T&C's and Privacy Policy

                                    </p>

                                </Col>
                                </li>
                                    <li className="preferences">
                                    <Col lg={12} sm={12}>
                                    <Row >
                                        <Col lg={6} sm={6}>
                                        <h4>

Flash deals

                                    </h4>
                                    </Col>
                                        <Col lg={6} sm={6}>
                                        <i className="fa fa-toggle-on profileToggle" />
                                    </Col>
                                    </Row>
                                    <p>

Sign up to receive daily emails for some of the hottest, limited-time deals on the site.

                                    </p>

                                </Col>
                                </li>
                                    <li className="preferences">
                                    <Col lg={12} sm={12}>
                                    <Row>
                                        <Col lg={6} sm={6}>
                                        <h4>

Liquidation deals

                                    </h4>
                                    </Col>
                                        <Col lg={6} sm={6}>
                                        <i className="fa fa-toggle-on profileToggle" />
                                    </Col>
                                    </Row>
                                    <p>

Sign up to receive emails about our last-chance liquidation deals.

                                    </p>

                                </Col>
                                </li>
                                    <li className="preferences">
                                    <Col lg={12} sm={12}>
                                    <Row>
                                        <Col lg={6} sm={6}>
                                        <h4>

Direct mail

                                    </h4>
                                    </Col>
                                        <Col lg={6} sm={6}>
                                        <i className="fa fa-toggle-on profileToggle" />
                                    </Col>
                                    </Row>
                                    <p>

we occasionallly send exclusive offers by mail with even greater savings to select customers.
Everyone does not receive the same offer. You will automatically be elgible to receive these great

                                    </p>

                                </Col>
                                </li>
                                    <li className="preferences">
                                    <Col lg={12} sm={12}>
                                    <Row>
                                        <Col lg={6} sm={6}>
                                        <h4>

Unsubscribe from all emails

                                    </h4>
                                    </Col>
                                        <Col lg={6} sm={6}>
                                        <i className="fa fa-toggle-on profileToggle" />
                                    </Col>
                                    </Row>


                                </Col>
                                </li>

                                </ul>
                            </Row>
                        </Col>
                    </Row>


                    <div className="formBtnWrap">
                        {/* <button
                            className="formBtn saveBtn"
                            type="submit"
                            disabled={submitting}
                            // onClick={handleSubmit}
                            >
Save Changes
                        </button> */}
                        <button className="formBtn saveBtn" type="submit" disabled={submitting}>{isFocused ? 'Changes Saved Successfully!!' : 'Save changes'}</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
};

export default reduxForm({
    form: 'login',
    validate,
})(MyProfile);
