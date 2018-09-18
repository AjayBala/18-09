import React, { Fragment } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import {
    Tab, Tabs, TabList, TabPanel,
} from 'react-tabs';
import MyProfile from '../AccountDetails/MyProfile/MyProfile';
import CompanyProfile from '../AccountDetails/CompanyProfile/CompanyProfile';
// import './Signup.scss';
import Activity from '../AccountDetails/Activity/Activity';
import './AccountTabs.scss';
// import TableInfo from './table';
// import FooterDetail from '../FooterDetail/FooterDetail';
// import ShopYesorNo from '../ShopYesorNo/ShopYesorNo';

/* eslint-disable react/prop-types */
const AccountTabs = ({ location }) => {
    const { pathname } = location;

return (
    <Fragment>
        <div>
            <Grid>
                <Row>

                    <Col lg={12} md={12} sm={12}>
                        <div className="bnrFormOutWrap bnrFormAccWrap">
                                <Tabs className="SignTabWrap">
                                    <TabList className="SignTabHeadWrap">
                                        <Tab className="SignTabHead">
                                            <span>
                                                My Profile
                                            </span>
                                        </Tab>
                                        <Tab className="SignTabHead">
                                            <span>
                                                Company Profile
                                            </span>
                                        </Tab>
                                        <Tab className="SignTabHead">
                                            <span>
                                                Activity
                                            </span>
                                        </Tab>
                                    </TabList>

                                    <TabPanel>
                                        { pathname && pathname === '/AccountTabs' && <MyProfile />}
                                    </TabPanel>
                                    <TabPanel>
                                        <CompanyProfile />
                                    </TabPanel>
                                    <TabPanel>
                                        <Activity />
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

export default AccountTabs;
