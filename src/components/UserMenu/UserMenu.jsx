import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operation';
import { useAuth } from 'hooks/useAuth';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <>
      <p>Welcome, {user.email}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </>
  );
};

export default UserMenu;
