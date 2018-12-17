import * as React from "react";
import { Component } from "react";
import { Container, Content } from "native-base";
import { Font, AppLoading } from "expo";

import Search from "./src/components/Search";
import theme from './native-base-theme/variables/platform';

export default class App extends Component {
  state = {
    loading: true
  };

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <AppLoading />;
    }

    return (
      <Container theme={theme}>
        <Content>
          <Search />
        </Content>
      </Container>
    );
  }
}
