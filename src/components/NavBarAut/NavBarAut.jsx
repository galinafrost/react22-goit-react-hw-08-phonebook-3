import { NavLink } from 'react-router-dom';

import styles from './styles.module.css';

const getClassName = ({ isActive }) => {
  return isActive ? `${styles.link} ${styles.active}` : styles.link;
};

const NavBarAut = () => {
  return (
    <div>
      <NavLink className={getClassName} to="/register">
        Registration
      </NavLink>
      |
      <NavLink className={getClassName} to="/login">
        Login
      </NavLink>
    </div>
  );
};

export default NavBarAut;
