import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { current } from '../redux/auth/auth-operations';

import HeaderMenu from './HeaderMenu';
import UserRoutes from './UserRoutes';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <div>
      <HeaderMenu />
      <UserRoutes />
    </div>
  );
};
