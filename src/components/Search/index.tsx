import * as React from "react";
import { Component } from "react";
import { SafeAreaView, View } from "react-native";
import { Formik, FormikProps } from "formik";
import { Constants } from "expo";
// import { InputItem, Button, List } from "antd-mobile-rn";
import {
  FormLabel,
  FormInput,
  FormValidationMessage,
  Button
} from "react-native-elements";
interface SearchFormValues {
  search: string;
}

const SearchInitialValue = { search: "" };

export default class Search extends Component {
  handleSearchSubmit = (values: SearchFormValues) => {
    console.log(values);
  };

  render() {
    return (
      <SafeAreaView style={{ paddingTop: Constants.statusBarHeight }}>
        <Formik
          initialValues={SearchInitialValue}
          onSubmit={this.handleSearchSubmit}
        >
          {({
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            error
          }: FormikProps<SearchFormValues>) => (
            <View>
              <FormLabel>Search</FormLabel>
              <FormInput
                onChangeText={handleChange('search')}
                onBlur={handleBlur}
                value={values.search}
              />
              <FormValidationMessage>{error}</FormValidationMessage>
              <Button
                title="Search"
                onPress={handleSubmit}
              />
            </View>
          )}
        </Formik>
      </SafeAreaView>
    );
  }
}
