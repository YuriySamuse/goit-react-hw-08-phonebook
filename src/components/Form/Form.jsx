import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';

import {
  SearchForm,
  Label,
  Input,
  Button,
  Error,
} from 'components/Form/Form.styled';

const phoneRegExp =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
const nameRegExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

const schema = yup.object().shape({
  name: yup.string().matches(nameRegExp, 'Name is not valid').required(),
  number: yup
    .string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .max(12)
    .required(),
});

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    // console.log(values);
    onSubmit(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <SearchForm autocomplette="off">
        <Label htmlFor="name">
          Name:
          <Input
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
          <Error name="name" component="div" />
        </Label>
        <Label htmlFor="number">
          Number:
          <Input
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          />
          <Error name="number" component="div" />
        </Label>

        <Button type="submit">Add contact</Button>
      </SearchForm>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
