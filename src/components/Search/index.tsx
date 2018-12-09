import * as React from "react";
import { Component } from "react";
import { SafeAreaView } from "react-native";
import { Formik, FormikProps } from "formik";
import { Constants } from "expo";
import { InputItem, Button, List } from "antd-mobile-rn";

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
            handleSubmit
          }: FormikProps<SearchFormValues>) => (
            <List>
              <InputItem
                value={values.search}
                onChange={handleChange("search")}
                onBlur={handleBlur}
                placeholder="Search"
                defaultValue={SearchInitialValue.search}
                extra={
                <Button
                  onClick={handleSubmit}
                  type="primary"
                >
                  Search
                </Button>
              }
              />
            </List>
          )}
        </Formik>
      </SafeAreaView>
    );
  }
}
