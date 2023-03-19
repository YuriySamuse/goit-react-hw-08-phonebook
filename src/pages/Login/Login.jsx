import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operation';
import * as React from 'react';
// import Button from '@mui/material/Button';
import { LabelStyled, FormStyled, Button } from './Login.styled.js';

const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormStyled onSubmit={handleSubmit} autoComplete="off">
      <LabelStyled>
        Email
        <input type="email" name="email" />
      </LabelStyled>
      <LabelStyled>
        Password
        <input type="password" name="password" />
      </LabelStyled>
      <Button type="submit">Log In</Button>
    </FormStyled>
  );
};

export default Login;
