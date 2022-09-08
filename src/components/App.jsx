import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useAuth from 'shared/hooks/useAuth';

import { current } from '../redux/auth/auth-operations';

import HeaderMenu from './HeaderMenu';
import UserRoutes from './UserRoutes';

export const App = () => {
  const dispatch = useDispatch();

  const isLogin = useAuth();

  useEffect(() => {
    if (isLogin) {
      dispatch(current());
    }
  }, [isLogin, dispatch]);

  return (
    <div>
      <HeaderMenu />
      <UserRoutes />
    </div>
  );
};
