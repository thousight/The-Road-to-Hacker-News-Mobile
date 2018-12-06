import * as React from 'react';
import { Component } from 'react';
import { Text, SafeAreaView } from 'react-native';

import Search from './src/components/Search';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <Search />
        <Text>Open up App.js to start working on your app!</Text>
      </SafeAreaView>
    );
  }
}