import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operation';
// import { FormStyled, FormLabel, Button, FormInput } from './Register.styled';

const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <span>
        Username
        <input type="text" name="name" />
      </span>
      <span>
        Email
        <input type="email" name="email" />
      </span>
      <span>
        Password
        <input type="password" name="password" />
      </span>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
