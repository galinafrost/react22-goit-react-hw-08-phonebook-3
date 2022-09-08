import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import useAuth from '../../shared/hooks/useAuth';

import { login } from 'redux/auth/auth-operations';

import LoginForm from '../../components/LoginForm';

const LoginPage = () => {
  const isAuth = useAuth();
  const dispath = useDispatch();

  const onLogin = data => {
    dispath(login(data));
  };

  if (isAuth) {
    return <Navigate to="/contacts" />;
  }
  return (
    <div>
      <LoginForm onSubmit={onLogin} />
    </div>
  );
};

export default LoginPage;
