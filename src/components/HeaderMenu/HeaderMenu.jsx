import { NavLink } from 'react-router-dom';

import useAuth from '../../shared/hooks/useAuth';

import NavBarAut from '../NavBarAut';
import UserMenu from '../UserMenu';

import styles from './styles.module.css';

const getLinkClassName = ({ isActive }) => {
  return isActive ? styles.linkActive : styles.link;
};

const HeaderMenu = () => {
  const isLogin = useAuth();

  return (
    <>
      <div className={styles.menu}>
        <NavLink to="/" className={getLinkClassName}>
          Home
        </NavLink>

        {isLogin && (
          <NavLink to="/contacts" className={getLinkClassName}>
            Сontacts
          </NavLink>
        )}
      </div>
      {isLogin ? <UserMenu /> : <NavBarAut />}
    </>
  );
};
export default HeaderMenu;
