import {
  AppstoreOutlined,
  BarChartOutlined,
  DollarOutlined,
  LogoutOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Divider, Menu } from "antd";
import React from "react";
import styles from "./ProfileDropDown.module.scss";
import { useMediaQuery } from "react-responsive";

type Props = {};
const ProfileDropDown = (props: Props) => {
  const lg = useMediaQuery({ query: "(min-width: 1200px)" });
  return (
    <Menu className={`${styles.menuContainer}`}>
      {lg ? null : (
        <>
          <Menu.Item  key={`1`}>
            <Button icon={<DollarOutlined />} type="text">Currencies</Button>
          </Menu.Item>
          <Menu.Item key={`2`}>
            <Button icon={<AppstoreOutlined />} type="text">Apps</Button>
          </Menu.Item>
          <Menu.Item key={`3`}>
            <Button icon={<BarChartOutlined />} type="text">Monitor</Button>
          </Menu.Item>
        </>
      )}

      <Menu.Item key={`4`}>
        <Button icon={<UserOutlined />} type="text">Profile</Button>
      </Menu.Item>
      <Menu.Item key={`5`}>
        <Button icon={<SettingOutlined />} type="text">Settings</Button>
      </Menu.Item>
      <Divider plain style={{ height: "1px", margin: 0 }} />
      <Menu.Item key={`6`}>
        <Button icon={<LogoutOutlined />} type="text">Logout</Button>
      </Menu.Item>
    </Menu>
  );
};

export default ProfileDropDown;
