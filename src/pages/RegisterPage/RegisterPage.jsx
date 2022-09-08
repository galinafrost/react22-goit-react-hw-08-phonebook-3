import { Navigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import useAuth from '../../shared/hooks/useAuth';

import { signup } from 'redux/auth/auth-operations';

import RegisterForm from '../../components/RegisterForm';

const RegisterPage = () => {
  const isAuth = useAuth();
  const dispath = useDispatch();

  const onSignup = data => {
    console.log(data);
    dispath(signup(data));
  };

  if (isAuth) {
    return <Navigate to="/contacts" />;
  }

  return (
    <div>
      <RegisterForm onSubmit={onSignup} />
    </div>
  );
};

export default RegisterPage;
