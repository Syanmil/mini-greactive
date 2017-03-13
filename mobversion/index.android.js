import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Container } from 'native-base'
import { AppNavigator } from './src/AppNavigator'

export default class mobversion extends Component {
  render() {
    return (
      <Container>
        <AppNavigator />
      </Container>
    );
  }
}

AppRegistry.registerComponent('mobversion', () => mobversion);
