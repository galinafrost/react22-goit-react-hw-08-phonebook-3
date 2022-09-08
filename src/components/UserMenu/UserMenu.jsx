import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import { getUser } from '../../redux/auth/auth-selectors';

import { logout } from '../../redux/auth/auth-operations';
import useAuth from 'shared/hooks/useAuth';

const UserMenu = () => {
  const user = useSelector(getUser);
  const dispatch = useDispatch();
  const isAuth = useAuth();
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    if (isAuth) return;
    navigate('/login');
  }, [isAuth, navigate]);

  return (
    <div>
      <p>Hello, {user.name}</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default UserMenu;
