import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operation';
import * as React from 'react';
import Button from '@mui/material/Button'; // import { FormStyled, FormLabel, FormInput, Button } from "./Login.styled";

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
    <form onSubmit={handleSubmit} autoComplete="off">
      <span>
        Email
        <input type="email" name="email" />
      </span>
      <span>
        Password
        <input type="password" name="password" />
      </span>
      <Button type="submit">Log In</Button>
    </form>
  );
};

export default Login;
