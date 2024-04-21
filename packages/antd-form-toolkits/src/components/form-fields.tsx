import React from 'react';
import FormField, { FormFieldProps } from './form-field';

interface FormFieldsProps {
  items: FormFieldProps[];
}

interface FormFieldsState {}

class FormFields extends React.Component<FormFieldsProps, FormFieldsState> {
  static defaultProps = {
    items: []
  };

  render() {
    const { items } = this.props;
    return items.map((field) => <FormField key={field.name} {...field} />);
  }
}

export default FormFields;
