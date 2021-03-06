import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { signOut } from '../../services/actions/auth';
import { useDispatch } from 'react-redux';
import styles from './left-menu.module.css';
import { useAppSelector } from '../../services/hooks/hooks';

const LeftMenu = () => {
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const activeStyle = {color: "#fff"};

  const LogOut = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(signOut())
  }

  if (!user) {
    return (
      <Redirect
        to={{
          pathname: '/login'
        }}
      />
    );
  }

  return (
    <div className={styles.leftmenu}>
      <ul className={`${styles.items} pb-6`}>
        <li>
          <NavLink
            to="/profile"
            className={`${styles.link} text_type_main-medium pr-6 pb-4 pt-4`}
            activeStyle={activeStyle}
            exact
          >
            Профиль
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile/orders"
            className={`${styles.link} text_type_main-medium pr-6 pb-4 pt-4`}
            activeStyle={activeStyle}
            exact
          >
            История заказов
          </NavLink>
        </li>
        <li>
          <a 
            href='/#'
            onClick={LogOut}
            className={`${styles.link} text_type_main-medium pr-6 pb-4 pt-4`} 
          >
            Выход
          </a>
        </li>
      </ul>
      <p className="text_type_main-default left text_color_inactive pt-10">
        В этом разделе вы можете изменить свои персональные данные
      </p>
    </div>
  );
};

export default LeftMenu;
