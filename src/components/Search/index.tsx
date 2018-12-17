import * as React from "react";
import { Component } from "react";
import { Formik, FormikProps } from "formik";
import { Constants } from "expo";
// import { InputItem, Button, List } from "antd-mobile-rn";
import {
  Form,
  Item,
  Input,
  Button,
  Text,
  Container
} from "native-base";

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
        <Container style={{ paddingTop: Constants.statusBarHeight }}>
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
              <Form>
                <Item>
                  <Input
                    placeholder="Search"
                    onChange={handleChange("search")}
                    handleBlur={handleBlur("search")}
                    value={values.search}
                  />
                </Item>
                <Item>
                  <Button onPress={handleSubmit}>
                    <Text>Search</Text>
                  </Button>
                </Item>
              </Form>
            )}
          </Formik>
        </Container>
    );
  }
}
