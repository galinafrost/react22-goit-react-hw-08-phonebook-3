import { Navigate } from 'react-router-dom';
import useAuth from 'shared/hooks/useAuth';

function WithAuthRedirect(Component, navigetTo) {
  const WithAuthRedirect = props => {
    const isLogin = useAuth();

    return !isLogin ? <Navigate to={navigetTo} /> : <Component {...props} />;
  };

  return WithAuthRedirect;
}

export default WithAuthRedirect;
