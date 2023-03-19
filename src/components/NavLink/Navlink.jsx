import { NavLinkStyled } from './NavLink.styled';

const AuthNav = () => {
  return (
    <div>
      <NavLinkStyled to="/register">Register</NavLinkStyled>
      <NavLinkStyled to="/login">Log In</NavLinkStyled>
    </div>
  );
};

export default AuthNav;
