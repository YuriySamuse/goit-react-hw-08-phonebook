const Login = () => {
  return (
    <form autoComplete="off">
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">LogIn</button>
    </form>
  );
};

export default Login;
