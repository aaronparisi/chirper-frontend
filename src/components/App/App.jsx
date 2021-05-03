import React from 'react';
import { Route } from 'react-router-dom'
import HomeContainer from '../Home/HomeContainer';

function App() {
  return (
    <React.Fragment >
      <Route path="/" component={HomeContainer} />
    </React.Fragment>
  );
}

export default App;
