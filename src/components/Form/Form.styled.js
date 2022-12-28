import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';

export const SearchForm = styled(Form)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  max-width: 800px;
`;

export const Label = styled.label`
  font-size: 18px;
  color: black;
  margin-right: 15px;
`;

export const Input = styled(Field)`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: solid black 1px;
  border-radius: 3px;
`;

export const Error = styled(ErrorMessage)`
  margin-bottom: 30px;
  color: tomato;
  font-size: 16px;
  text-align: center;
`;

export const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;

  &:hover {
    color: red;
  }
`;
