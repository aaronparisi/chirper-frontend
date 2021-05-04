import React, { useEffect } from 'react';
import { Route } from 'react-router-dom'
import HomeContainer from '../Home/HomeContainer';
import HelpContainer from '../Help/HelpContainer';
import AboutContainer from '../About/AboutContainer';
import NavBarContainer from '../NavBar/NavBarContainer';
import ContactContainer from '../Contact/ContactContainer';
import SignupContainer from '../Session/SignupContainer'
import LoginContainer from '../Session/LoginContainer'

import { Helmet } from 'react-helmet'

const App = ({ fetchCurrentUser }) => {

  useEffect(() => {
    fetchCurrentUser()
  }, [fetchCurrentUser])

  return (
    <React.Fragment >
      <Helmet
        titleTemplate="Chirper - %s"
        defaultTitle="Chirper"
      >
      </Helmet>
      
      <Route path="/" component={NavBarContainer} />
      <Route exact path="/" component={HomeContainer} />
      <Route exact path="/help" component={HelpContainer} />
      <Route exact path="/about" component={AboutContainer} />
      <Route exact path="/contact" component={ContactContainer} />
      <Route exact path="/signup" component={SignupContainer} />
      <Route exact path="/login" component={LoginContainer} />
    </React.Fragment>
  );
}

export default App;
