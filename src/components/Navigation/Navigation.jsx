import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';

// import { NavLinkStyled } from './Navigation.styled';
// import { Box } from "components/Box";

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <div>
        <NavLink to="/">Home</NavLink>
        {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
      </div>
    </nav>
  );
};

export default Navigation;
