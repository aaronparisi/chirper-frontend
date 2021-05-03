import React from 'react';
import { Route } from 'react-router-dom'
import HomeContainer from '../Home/HomeContainer';
import HelpContainer from '../Help/HelpContainer';

function App() {
  return (
    <React.Fragment >
      <Route exact path="/" component={HomeContainer} />
      <Route path="/help" component={HelpContainer} />
    </React.Fragment>
  );
}

export default App;
