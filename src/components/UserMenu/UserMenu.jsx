import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operation';
import { useAuth } from 'hooks/useAuth';
import { Button, UsernameStyled, WrapStyled } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <WrapStyled>
      <UsernameStyled>Welcome, {user.name}</UsernameStyled>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </WrapStyled>
  );
};

export default UserMenu;
