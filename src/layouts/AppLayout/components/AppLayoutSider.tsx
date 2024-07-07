import {
  BookOutlined,
  FileAddOutlined,
  FireOutlined,
  HomeOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Menu, theme } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { ItemType, MenuItemType } from 'antd/es/menu/hooks/useItems';
import React, { FC, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface AppLayoutSiderProps {}
const AppLayoutSider: FC<AppLayoutSiderProps> = ({}) => {
  const location = useLocation();

  const items = [
    {
      key: 'home',
      label: <Link to={'/'}>Home</Link>,
      icon: <HomeOutlined></HomeOutlined>,
    },
    {
      key: 'users',
      label: <Link to={'/users'}>users</Link>,
      icon: <UserOutlined></UserOutlined>,
    },
  ];
  const activeItem = useMemo(() => {
    const item = items.find((e) => location.pathname.includes(e.key));
    if (item != undefined) {
      return item.key;
    } else {
      return undefined;
    }
  }, [location, items]);

  return (
    <Sider
      style={{ borderInlineEnd: '1px dashed gray' }}
      theme="light"
      breakpoint="lg"
      collapsedWidth="0"
      width={240}
    >
      <div className="demo-logo-vertical" />
      <Menu
        theme="light"
        mode="inline"
        selectedKeys={[...(activeItem ? [activeItem] : [])]}
        items={items}
      />
    </Sider>
  );
};
export default AppLayoutSider;
