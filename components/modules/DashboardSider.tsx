import { AppstoreOutlined, CloseOutlined } from "@ant-design/icons";
import { Button, Drawer, Menu } from "antd";
import React from "react";
import styles from "./DashboardSider.module.scss";
import { useMediaQuery } from "react-responsive";
import Sider from "antd/lib/layout/Sider";
import { useDispatch } from "react-redux";
import { toggleNav } from "@store/uiSlice";
import SubMenu from "antd/lib/menu/SubMenu";
import { BsChevronDoubleRight } from "react-icons/bs";
import { DynamicIcon } from "@widgets/DynamicIcon";
import data from "@data/data.json";
import { useRouter } from "next/router";

type Props = {
  sidebarToggle: boolean;
  showNavMenu: boolean;
  showDrawer: () => void;
  visibleDrawer: boolean;
  drawerClose: () => void;
};

type MenuDataType = {
  title: string;
  key: string;
  icon?: string;
  items?: Array<MenuDataType>;
  link?: string;
};

const DashboardSider: React.FC<Props> = (props) => {
  const router = useRouter();
  const showNavMenu = useMediaQuery({ query: "(min-width: 1200px)" });
  const sideMenu = useMediaQuery({ query: "(min-width: 480px)" });
  const sm = useMediaQuery({ query: "(min-width: 480px)" });
  const dispatch = useDispatch();
  const menuData: Array<MenuDataType> = data.us
    .menudata as unknown as Array<MenuDataType>;
  const menuClick = (link: string | null) => {
    if (link) router.push(link);
  };
  const menuList = (data: Array<MenuDataType>, index: number = 0) => {
    return data.map((item) => {
      return item.items !== undefined ? (
        <SubMenu
          key={item.key}
          style={{ marginLeft: index > 0 ? ".75em" : "0" }}
          icon={
            item.icon ? (
              <DynamicIcon
                size={18}
                name={item.icon}
                style={{ marginRight: ".75em" }}
              />
            ) : index === 0 ? (
              <AppstoreOutlined />
            ) : null
          }
          title={
            props.sidebarToggle
              ? !sm
                ? item.title
                : index > 0
                ? item.title
                : null
              : item.title
          }
        >
          {menuList(item.items, index + 1)}
        </SubMenu>
      ) : (
        <Menu.Item
          key={item.key}
          style={{ marginLeft: index > 0 ? ".75em" : "0" }}
          icon={
            item.icon ? (
              <DynamicIcon
                name={item.icon}
                size={18}
                style={{ marginRight: ".75em" }}
              />
            ) : index === 0 ? (
              <AppstoreOutlined />
            ) : null
          }
          onClick={() => (item.link ? menuClick(item.link) : menuClick(null))}
        >
          {props.sidebarToggle
            ? !sm
              ? item.title
              : index > 0
              ? item.title
              : null
            : item.title}
        </Menu.Item>
      );
    });
  };
  const menu = (
    <Menu
      mode="inline"
      className={`${styles.menu}`}
      inlineCollapsed={sm ? props.sidebarToggle : false}
      theme="dark"
      defaultSelectedKeys={["1"]}
      style={{
        width: props.sidebarToggle ? (sm ? "80px" : "100%") : "300px",
      }}
    >
      {menuList(menuData)}

      {showNavMenu ? (
        <Button
          type="text"
          size="large"
          icon={
            <BsChevronDoubleRight
              color="#aaa"
              style={{
                transform: props.sidebarToggle
                  ? "rotate(0deg)"
                  : "rotate(180deg)",
                transition: "all .2s ease-in-out",
              }}
            />
          }
          onClick={() => dispatch(toggleNav())}
          style={{
            position: "fixed",
            bottom: 0,
            borderTop: "1px solid #1b3745",
            left: 0,
            transition: "width .2s ease-in-out",
            zIndex: 5,
            background: "#164d74",
            width: props.sidebarToggle ? "80px" : "300px",
            justifyContent: "center",
          }}
        ></Button>
      ) : null}
    </Menu>
  );

  return (
    <>
      {sm ? (
        <Sider
          trigger={null}
          width={`300px`}
          collapsedWidth={sideMenu ? `80px` : 0}
          collapsible={showNavMenu ? true : false}
          onCollapse={() => dispatch(toggleNav())}
          collapsed={props.sidebarToggle}
          className={`${styles.sider} fixed w-full`}
          style={{ transition: "all ease-in-out .2s" }}
        >
          {menu}
        </Sider>
      ) : (
        <Drawer
          onClose={props.drawerClose}
          destroyOnClose
          visible={props.visibleDrawer}
          headerStyle={{
            background: "#1b3745",
            marginTop: "auto",
            marginBottom: "auto",
            height: "60px",
          }}
          drawerStyle={{ background: "#1b3745" }}
          contentWrapperStyle={{
            width: "100%",
            background: "#1b3745",
            overflowY: "auto",
          }}
          bodyStyle={{ padding: "2em 1em 0em 1em" }}
          closeIcon={<CloseOutlined style={{ color: "#fff" }} />}
        >
          {menu}
        </Drawer>
      )}
    </>
  );
};

export default DashboardSider;
