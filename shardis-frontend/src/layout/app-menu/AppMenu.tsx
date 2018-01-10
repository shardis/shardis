import * as React from 'react';

import { Icon, Menu } from 'antd';
import { Link } from 'react-router-dom';

class AppMenu extends React.Component {
  render() {
    return (
      <Menu mode="horizontal">
        <Menu.Item key="/">
          <Link to={'/'}><Icon type="app"/>Main Page</Link>
        </Menu.Item>
        <Menu.Item key="/home">
          <Link to={'/home'}><Icon type="app"/>Home</Link>
        </Menu.Item>
        <Menu.Item key="/about">
          <Link to={'/about'}><Icon type="app"/>About</Link>
        </Menu.Item>
        <Menu.Item key="/time">
          <Link to={'/time'}><Icon type="app"/>Time</Link>
        </Menu.Item>
        <Menu.Item key="/404">
          <Link to={'/404'}><Icon type="app"/>404</Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default AppMenu;
