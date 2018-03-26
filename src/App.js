import React from 'react';
import { Switch, Route, browserHistory } from 'react-router-dom';
import styled from 'styled-components';

import LoginPage from './pages/loginPage/LoginPage';
import RegistrationPage from './pages/registrationPage/RegistrationPage';
import MainPage from './pages/mainPage/MainPage';
import SentApplicationPage from './pages/sentApplicationPage/SentApplicationPage';
import ChangeUserDataPage from './pages/changeUserDataPage/ChangeUserDataPage';
import ReceivedApplicationsPage from './pages/receivedApplicationsPage/ReceivedApplicationsPage';

const Content = styled.div`
    margin-left: 170px;
`;

const App = () => (
    <div>
      <Content>
        <Switch history={browserHistory}>
          <Route exact path="/" component={LoginPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/registration" component={RegistrationPage} />
          <Route path="/home" component={MainPage} />
          <Route path="/sent-application" component={SentApplicationPage} />
          <Route path="/change-user-data" component={ChangeUserDataPage} />
          <Route path="/received-applications" component={ReceivedApplicationsPage} />
        </Switch>
      </Content>
    </div>
)

export default App;
