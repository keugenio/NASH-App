import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import Home from './components/Home';


const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="app" component={Home} title="Non-alcoholic Steatohepatitis"/>          
      </Scene>
    </Router>
  );
};

export default RouterComponent;