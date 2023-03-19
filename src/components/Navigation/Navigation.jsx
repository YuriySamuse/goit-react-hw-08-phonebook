import { useAuth } from 'hooks/useAuth';
import { NavLinkStyled } from './Navigation.styled';

// import { NavLinkStyled } from './Navigation.styled';
// import { Box } from "components/Box";

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <div>
        <NavLinkStyled to="/">Home</NavLinkStyled>
        {isLoggedIn && <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>}
      </div>
    </nav>
  );
};

export default Navigation;
