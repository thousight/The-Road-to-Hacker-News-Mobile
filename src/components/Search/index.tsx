import * as React from 'react'
import { Component } from 'react'
import { SafeAreaView } from 'react-native'
import { Formik, Field } from 'formik'
import { Constants } from 'expo'

import FormikInput from './FormikInput'

interface SearchFormValues {
  search: string
}

const SearchInitialValue = { search: '' }

export default class Search extends Component {
  handleSearchSubmit = (values: SearchFormValues) => {
    console.log(values)
  }

  render() {
    return (
      <SafeAreaView style={{ paddingTop: Constants.statusBarHeight }}>
        <Formik
          initialValues={SearchInitialValue}
          onSubmit={this.handleSearchSubmit}
        >
          {() => (
              <Field name="search" component={FormikInput} />
          )}
        </Formik>
      </SafeAreaView>
    )
  }
}