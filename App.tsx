import * as React from 'react';
import { Component } from 'react';
import { Text, SafeAreaView } from 'react-native';
import { List, InputItem, Button } from 'antd-mobile-rn';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <Text>Open up App.js to start working on your app!</Text>
        <List>
          <InputItem />
          <Button>Apply</Button>
        </List>
      </SafeAreaView>
    );
  }
}