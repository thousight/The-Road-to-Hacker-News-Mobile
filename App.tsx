import * as React from 'react';
import { Component } from 'react';
import { Text } from 'react-native';
import styled from './src/styled-components';

const Container = styled.View`
  flex: 1,
  background-color: '#FFFFFF',
  align-items: 'center',
  justify-content: 'center',
`

export default class App extends Component {
  render() {
    return (
      <Container>
        <Text>Open up App.js to start working on your app!</Text>
      </Container>
    );
  }
}