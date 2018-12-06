import * as React from 'react';
import { Component } from 'react';
import { SafeAreaView, Platform } from 'react-native';
import { SearchBar } from 'antd-mobile-rn';
import { Constants } from 'expo'

export default class Search extends Component {
  render() {
    const isShowCancelButton = Platform.OS === 'android';
    console.log(isShowCancelButton);
  
    return (
      <SafeAreaView style={{ paddingTop: Constants.statusBarHeight }}>
        <SearchBar
          showCancelButton={isShowCancelButton}
          cancelText="Clear"
        />
      </SafeAreaView>
    );
  }
}