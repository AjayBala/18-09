import React, { Fragment } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import {
    Tab, Tabs, TabList, TabPanel,
} from 'react-tabs';
import Members from '../UserManagementDetails/Members/Members';
import Admins from '../UserManagementDetails/Admins/Admins';
import Contributors from '../UserManagementDetails/Contributors/Contributors';
import Groups from '../UserManagementDetails/Groups/Groups';
import MemberPermission from '../UserManagementDetails/MemberPermission/MemberPermission';
import './UserManagementTabs.scss';
// import TableInfo from './table';
// import FooterDetail from '../FooterDetail/FooterDetail';
// import ShopYesorNo from '../ShopYesorNo/ShopYesorNo';

/* eslint-disable react/prop-types */
const userManagementTabs = ({ location }) => {
    const { pathname } = location;

return (
    <Fragment>
        <div>
            <Grid>
                <Row>

                    <Col lg={12} md={12} sm={12}>
                        <div className="bnrFormOutWrap bnrFormAccWrap">
                            <Tabs className="UserManagementTabWrap">
                                <TabList className="UserManagementHeadWrap">
                                    <Tab className="UserManagementHead">
                                        <span>
                                                Members
                                        </span>
                                    </Tab>
                                    <Tab className="UserManagementHead">
                                        <span>
                                                Admins
                                        </span>
                                    </Tab>
                                    <Tab className="UserManagementHead">
                                        <span>
                                                 Contributors
                                        </span>
                                    </Tab>
                                    <Tab className="UserManagementHead">
                                        <span>
                                                 Groups
                                        </span>
                                    </Tab>
                                    <Tab className="UserManagementHead">
                                        <span>
                                                Member Permissions
                                        </span>
                                    </Tab>
                                    <span className="UserManagementAddUserBtn">
                                        <input type="button" value="+ Add User" className="AddUserBtn"/>
                                    </span>

                                </TabList>

                                <TabPanel>
                                    { pathname && pathname === '/userManagement' && <Members />}
                                </TabPanel>
                                <TabPanel>
                                    <Admins />
                                </TabPanel>
                                <TabPanel>
                                    <Contributors />
                                </TabPanel>
                                <TabPanel>
                                    <Groups />
                                </TabPanel>
                                <TabPanel>
                                    <MemberPermission />
                                </TabPanel>
                            </Tabs>
                        </div>
                    </Col>
                </Row>
            </Grid>
        </div>
    </Fragment>
    );
};

// SignupPage.propTypes = {
//     location: PropTypes.string.isRequired,
// };

export default userManagementTabs;
