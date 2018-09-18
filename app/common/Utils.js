import _forEach from 'lodash/forEach';

export const validateEmail = values => {
    let error = '';

    const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailPasswordPattern = /^[a-zA-Z0-9]{8,16}$/g;
    const validEmail = emailPattern.test(values.email);
    // eslint-disable-next-line
    const validPwd = emailPasswordPattern.test(values.password);
    if (!values.email) {
        error = 'Required';
    } else if (!validEmail) {
        error = 'Please Enter a Valid Email';
    }

return error;
};

export const validatePassword = (values, length, capital, special) => {
    let error = '';

    const upperCaseLetters = /[A-Z]/g;
    const SpecialSmallLetters = /[!@#$%^&*)(+=._-]/g;

    if (!values.password) {
        error = 'Required';
        const errorConst = [length, capital, special];
        _forEach(errorConst, value => {
            if (value && value.classList.length) {
                value.classList.remove('errorClass');
                value.classList.remove('valid');
            }
        });
    } else {
        if (values.password.length < 8) {
            length.classList.add('errorClass');
            capital.classList.add('errorClass');
            special.classList.add('errorClass');
            error = 'Password should be greater than 8';
        } else {
            length.classList.remove('errorClass');
            length.classList.add('valid');
        }

        if (!values.password.match(upperCaseLetters)) {
            error = 'Need upper case';
            capital.classList.add('errorClass');
        } else {
            capital.classList.add('valid');
            capital.classList.remove('errorClass');
        }

        if (!values.password.match(SpecialSmallLetters)) {
            error = 'Need Atleast one special Character';
            special.classList.add('errorClass');
        } else {
            special.classList.add('valid');
            special.classList.remove('errorClass');
        }
    }

return { error, length, capital, special };
};

export const normalizeZip = value => {
    if (!value) {
        return value;
    }
    const onlyNums = value.replace(/[^\d]/g, '');

return onlyNums;
};

export const required = value => (value ? undefined : 'Required');

export const positiveValue = value => (
    value && value <= 0 ? 'Must be positive values' : undefined);

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

    if (valueLength === 0) {
        if (elemtName === 'comPhoneText3') {
            document.getElementsByName('comPhoneText2')[0].focus();
        } else if (elemtName === 'comPhoneText2') {
            document.getElementsByName('comPhoneText1')[0].focus();
        }
    }
};

export const normalizeCard = (value, previousValue) => {
    if (!value) {
        return value;
    }
    const onlyNums = value.replace(/[^\d]/g, '');
    if (!previousValue || value.length > previousValue.length) {
    // typing forward
        if (onlyNums.length === 4) {
            return `${onlyNums}-`;
        }
        if (onlyNums.length === 8) {
            return `${onlyNums.slice(0, 4)}-${onlyNums.slice(4)}-`;
        }
        if (onlyNums.length === 12) {
            return `${onlyNums.slice(0, 8)}-${onlyNums.slice(8)}-`;
        }
    }
    if (onlyNums.length <= 4) {
        return onlyNums;
    }
    if (onlyNums.length <= 8) {
        return `${onlyNums.slice(0, 4)}-${onlyNums.slice(4)}`;
    }
    if (onlyNums.length <= 12) {
        return `${onlyNums.slice(0, 8)}-${onlyNums.slice(8)}`;
    }

return `${onlyNums.slice(0, 4)}-${onlyNums.slice(4, 8)}-${onlyNums.slice(8, 12)}-${onlyNums.slice(12, 16)}`;
};

export const validateYear = values => {
    let error = '';
    if (Number(values.year) < 2019) {
        error = 'Year should be at least 2019';
    } else if (Number(values.year) > 2030) {
        error = 'Year should be below 2030';
    }

    return error;
};

export const validateMonth = values => {
    let error = '';
    if (Number(values.month) < 0) {
        error = 'Month should be between 1 to 12';
    } else if (Number(values.month) > 12) {
        error = 'Month should be between 1 to 12';
    }

    return error;
};
