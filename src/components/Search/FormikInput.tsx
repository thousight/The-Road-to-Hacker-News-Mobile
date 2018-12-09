import * as React from 'react'
import { InputItem } from 'antd-mobile-rn'
import { FieldProps } from 'formik'

const FormikInput = ({
  field,
  form
}: FieldProps) => (
  <InputItem
    {...field}
    onVirtualKeyboardConfirm={form.handleSubmit}
  />
)

export default FormikInput
