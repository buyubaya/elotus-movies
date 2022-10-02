import { Menu } from 'antd';
import React from 'react';
import s from './AppMainMenu.module.scss';

function AppMainMenu() {
  return (
    <div className={s.container}>
      <Menu mode="horizontal" theme="dark">
        <Menu.Item>Movies</Menu.Item>
        <Menu.Item>TV Shows</Menu.Item>
        <Menu.Item>People</Menu.Item>
        <Menu.Item>More</Menu.Item>
      </Menu>
    </div>
  );
}

export default AppMainMenu;
