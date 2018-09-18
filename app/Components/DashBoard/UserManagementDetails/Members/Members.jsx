import React from 'react';
// import {
//     ControlLabel, Row, Col,
// } from 'react-bootstrap';
// // import { render } from 'react-dom';
// import { Field, reduxForm } from 'redux-form';
// import PropTypes from 'prop-types';
import './Members.scss';
// import { connect } from 'react-redux';

export const Members = () => (
    <div className="profileWrapBox">
        <ul className="profileWrapList">
            <li><i className="fa fa-user-circle" /></li>
            <li>John Doe</li>
            <li>johndoe@overstock.com</li>
            <li>Admin</li>
            <li>Procurement</li>
            <li><a>My profile</a></li>
        </ul>

        <ul className="userWrapList">
            <li><input type="radio"/></li>
            <li><b> Name </b></li>
            <li><b> Email </b></li>
            <li><b> Role </b></li>
            <li><b> Group </b></li>
            <li><b> Action </b></li>
            <li><input type="radio"/></li>
            <li>Jane doe</li>
            <li>janedoe@overstock.com</li>
            <li>Admin</li>
            <li>Maintenance</li>
            <li>
                <i className="fa fa-pencil-square-o"/> &nbsp;
                <i className="fa fa-trash-o"/>
            </li>
            <li><input type="radio"/></li>
            <li>Jon Doe</li>
            <li>janedoe@overstock.com</li>
            <li>Admin</li>
            <li>Tech Team</li>
            <li>
                <i className="fa fa-pencil-square-o"/> &nbsp;
                <i className="fa fa-trash-o"/>
            </li>
            <li><input type="radio"/></li>
            <li>Jane doe</li>
            <li>janedoe@overstock.com</li>
            <li>Contributor</li>
            <li>Maintenance</li>
            <li>
                <i className="fa fa-pencil-square-o"/> &nbsp;
                <i className="fa fa-trash-o"/>
            </li>
            <li><input type="radio"/></li>
            <li>Jon Doe</li>
            <li>janedoe@overstock.com</li>
            <li>Contributor</li>
            <li>Maintenance</li>
            <li>
                <i className="fa fa-pencil-square-o"/> &nbsp;
                <i className="fa fa-trash-o"/>
            </li>
            <li><input type="radio"/></li>
            <li>Jane doe</li>
            <li>janedoe@overstock.com</li>
            <li>Contributor</li>
            <li>Maintenance</li>
            <li>
                <i className="fa fa-pencil-square-o"/> &nbsp;
                <i className="fa fa-trash-o"/>
            </li>
            <li><input type="radio"/></li>
            <li>Jon Doe</li>
            <li>janedoe@overstock.com</li>
            <li>Contributor</li>
            <li>Maintenance</li>
            <li>
                <i className="fa fa-pencil-square-o"/> &nbsp;
                <i className="fa fa-trash-o"/>
            </li>
            <li><input type="radio"/></li>
            <li>Jane doe</li>
            <li>janedoe@overstock.com</li>
            <li>Contributor</li>
            <li>Maintenance</li>
            <li>
                <i className="fa fa-pencil-square-o"/> &nbsp;
                <i className="fa fa-trash-o"/>
            </li>
        </ul>
    </div>
);

export default Members;
