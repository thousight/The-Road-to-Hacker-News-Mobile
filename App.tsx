import * as React from 'react';
import { Component } from 'react';
import { Text, SafeAreaView } from 'react-native';
import { Font, AppLoading } from 'expo';

import Search from './src/components/Search';

export default class App extends Component {
  state = {
    loading: true,
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <AppLoading />;
    }
  
    return (
      <SafeAreaView>
        <Search />
        <Text>Open up App.js to start working on your app!</Text>
      </SafeAreaView>
    );
  }
}