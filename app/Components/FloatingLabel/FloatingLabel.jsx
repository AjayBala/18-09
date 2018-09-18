import React from 'react';
import {
     ControlLabel
} from 'react-bootstrap';
import './FloatingLabel.scss';


const floatingLabelField = ({
    input, label, className, type, meta: { touched, error },
}) => (
    <div className={input.value === '' ? `form-group ${className}` : `form-group labelActive ${className}`}>
        <div className={touched
            && error ? 'floatLabelWrap errorBorder' : 'floatLabelWrap'}>
            <input
                {...input}
                autoComplete="off"
                type={type}
                className="inputTxtStyle" />
            <ControlLabel className="labelTxt">{label}</ControlLabel>
            {touched && ((
                error && (<span className="error_text">{error}</span>)
                ))}
        </div>
    </div>
);

export default floatingLabelField;
