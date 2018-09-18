import React from 'react';
import { Router, Route } from 'react-router';
import Favicon from 'react-favicon';
import PrivateRoute from './Components/PrivateRouter/PrivateRouter';
import history from './history';
import Exitaccount from './Components/Exitaccount/Exitaccount';
import SignupPage from './Components/Signup/SignupPage';
import HomePage from './Components/HomePage/HomePage';
import ForgotPasswordEmailTemplate from './Components/ForgotPassword/ForgotPasswordEmailTemplate/ForgotPasswordEmailTemplate';
import Layout from './Components/Layout';
import FavImg from '../assets/Images/favicon.ico';
import Com from './Components/Com/Com';
import Govt from './Components/Govt/Govt';
import ForgotPasswordPopUp from './Components/ForgotPassword/ForgotPasswordPopUp/ForgotPasswordPopUp';
import LoginAuth from './Components/Login/LoginAuth/LoginAuth';
import { createAccountPopContent, loginPopContent } from './common/Constants';
import Sidemenu from './Components/DashBoard/SideMenu';

const App = () => (
    <Layout>
        <Favicon url={FavImg} />
        <section id="mainWrap">
            <Router history={history}>
                <React.Fragment>
                    <PrivateRoute exact path="/" component={<h1>Haii this is home Page</h1>} />
                    <Route path="/login" component={LoginAuth} />
                    <Route path="/signup" component={SignupPage} />
                    <Route path="/exist-account" component={Exitaccount}/>
                    <Route path="/com" component={Com}/>
                    <Route path="/gov" component={Govt} />
                    <Route path="/shop-yesno" component={SignupPage}/>
                    <Route path="/home" render={routeProps => <HomePage {...routeProps} bodycontent={createAccountPopContent} />} />
                    <Route path="/email-template" component={ForgotPasswordEmailTemplate} />
                    <Route path="/Change-password" component={ForgotPasswordPopUp} />
                    <Route path="/signin" component={ForgotPasswordPopUp} />
                    <Route path="/professionalHome" render={routeProps => <HomePage {...routeProps} bodycontent={loginPopContent} />} />
                    <Route path="/loginAuth" component={LoginAuth} />
                    <Route path="/SideMenu" component={Sidemenu} />
                </React.Fragment>
            </Router>
        </section>
    </Layout>
);

export default App;
