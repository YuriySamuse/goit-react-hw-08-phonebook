import Navigation from 'components/Navigation/Navigation';
import AuthNav from 'components/NavLink/Navlink';
import UserMenu from 'components/UserMenu/UserMenu';
import { HeaderStyled } from './AppBar.styled';
import { useAuth } from 'hooks';

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <HeaderStyled>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </HeaderStyled>
  );
};

export default AppBar;
