import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import GreenScreen from './src/GreenScreen';
import RedScreen from './src/RedScreen';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="green"
            component={GreenScreen}
            title="Green"
            initial
          />
          <Scene
            key="red"
            component={RedScreen}
            title="Red"
          />
        </Scene>
      </Router>
    );
  }
}
