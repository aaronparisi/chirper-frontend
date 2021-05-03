import React from 'react';
import { Route } from 'react-router-dom'
import HomeContainer from '../Home/HomeContainer';
import HelpContainer from '../Help/HelpContainer';
import AboutContainer from '../About/AboutContainer';

import { Helmet } from 'react-helmet'
import ContactContainer from '../Contact/ContactContainer';

function App() {
  return (
    <React.Fragment >
      <Helmet
        titleTemplate="Chirper - %s"
      >
        <title>Nested Title</title>
      </Helmet>
      
      <Route exact path="/" component={HomeContainer} />
      <Route exact path="/help" component={HelpContainer} />
      <Route exact path="/about" component={AboutContainer} />
      <Route exact path="/contact" component={ContactContainer} />
    </React.Fragment>
  );
}

export default App;
