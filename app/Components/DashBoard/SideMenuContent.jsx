import React from 'react';
import './SideMenu.css';
import history from '../../history';

const Styles = {
    headerStyle: {
        backgroundColor: '#AFB3BA',
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 25,
        paddingBottom: 25
    },
    menuStyles: {
        backgroundColor: '#000',
    },
    menuContentColor: {
        backgroundColor: '#1C1C1C'
    }
};

const SidemenuContent = () => ({
    render() {
        return (
            <div style={Styles.menuStyles}>
                <div id="sidemenuHeader" style={Styles.headerStyle}>
                    <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <i className="fa fa-user-circle" aria-hidden="true" style={{ color: 'white', fontSize: 42 }} />
                    </div>
                    <div style={{ flex: 2 }}>
                        <h4>John</h4>
                        <h4>Company XYZ</h4>
                    </div>
                    <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <i className="fa fa-angle-left" aria-hidden="true" style={{ color: 'white', fontSize: 28 }} />
                    </div>
                </div>
                <div id="sideBarMenuList" style={Styles.menuContentColor}>
                    <ul className="menuInnerWrapper">
                        <li className="menuItemList">
                            <i className="fa fa-tag" aria-hidden="true" style={{ color: 'white', fontSize: 14 }}/>
                            <a onClick={() => history.push('./exist-account')}>
  Shopping
                            </a>
                        </li>
                        <li className="menuItemList">
                            <i className="fa fa-tag" aria-hidden="true" style={{ color: 'white', fontSize: 14 }}/>
                            <a onClick={() => history.push('./exist-account')}>
Account
                                {' '}
                            </a>
                        </li>
                        <li className="menuItemList">
                            <i className="fa fa-clock-o" aria-hidden="true" style={{ color: 'white', fontSize: 14 }}/>
                            <a onClick={() => history.push('./exist-account')}>
Order History
                            </a>
                        </li>
                        <li className="menuItemList">
                            <i className="fa fa-percent" aria-hidden="true" style={{ color: 'white', fontSize: 14 }}/>
                            <a onClick={() => history.push('./exist-account')}>
Exclusive Offers
                            </a>
                        </li>
                        <li className="menuItemList">
                            <i className="fa fa-tag" aria-hidden="true" style={{ color: 'white', fontSize: 14 }}/>
                            <a onClick={() => history.push('./exist-account')}>
Business Tools
                            </a>
                        </li>
                        <li className="menuItemList">
                            <i className="fa fa-tag" aria-hidden="true" style={{ color: 'white', fontSize: 14 }}/>
                            <a onClick={() => history.push('./loginAuth')}>
Payment Management
                                {' '}
                            </a>
                        </li>
                        <li className="menuItemList">
                            <i className="fa fa-tag" aria-hidden="true" style={{ color: 'white', fontSize: 14 }}/>
                            <a onClick={() => history.push('./Change-password')}>

Payment Management
                            </a>
                        </li>
                        <li className="menuItemList">
                            <i className="fa fa-users" aria-hidden="true" style={{ color: 'white', fontSize: 14 }}/>
                            <a onClick={() => history.push('./exist-account')}>
User Management
                            </a>
                        </li>
                        <li className="menuItemList">
                            <i className="fa fa-star-o" aria-hidden="true" style={{ color: 'white', fontSize: 14 }}/>
                            <a onClick={() => history.push('./email-template')}>
My Reviews
                                {' '}
                            </a>
                        </li>
                    </ul>

                </div>
            </div>
        );
    }
});

export default SidemenuContent;
