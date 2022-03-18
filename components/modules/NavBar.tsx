import {
  AppstoreOutlined,
  BarChartOutlined,
  SearchOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Dropdown, Layout, Space, Tooltip } from "antd";
import { Header } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import React from "react";
import styles from "@moduleStyles/NavBar.module.scss";
import MediaQuery, { useMediaQuery } from "react-responsive";
import Brand from "@widgets/graphics_widgets/Brand";
import NavMenu from "@widgets/NavMenu";
import IMSLogo from "@widgets/graphics_widgets/IMSLogo";
import ProfileDropDown from "@widgets/ProfileDropDown";
import IoNotificationsOutline, {
  IoMdMenu,
  IoMdNotificationsOutline,
} from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import BrandIcon from "@widgets/graphics_widgets/BrandIcon";

type Props = {
  toggle: boolean;
  drawerOpen: () => void;
};

const NavBar = (props: Props) => {
  const sm = useMediaQuery({ query: "(min-width: 480px)" });
  return (
    <Layout className={`${styles.dashboardLayout}  `}>
      <Header className={`${styles.navBar}  `}>
        {sm ? (
          <Sider
            collapsedWidth={true ? `80px` : 0}
            collapsed={props.toggle}
            className={`${styles.headerSider}`}
            width={`300px`}
            style={{ background: !sm ? "#fff" : "#1b3745" }}
          >
            <Brand
              color={sm ? "#fff" : ""}
              iconOnly={props.toggle}
              className={`${styles.hFull}`}
            />
          </Sider>
        ) : null}

        <div className={`${styles.navContent}`}>
          {!sm ? (
            <Button
              type="text"
              shape="circle"
              className={`${styles.logoButton}`}
              style={{
                height: "50px",
                width: "50px",
                marginTop: "auto",
                marginBottom: "auto",
                padding: "0px 0px 5px 10px",
              }}
              onClick={() => props.drawerOpen()}
              icon={<BrandIcon />}
            />
          ) : null}

          <NavMenu />
          <Space className={`${styles.right}`}>
            <Tooltip title="Search">
              <Button
                type="text"
                size="large"
                shape="circle"
                icon={<SearchOutlined />}
              />
            </Tooltip>

            <MediaQuery minWidth={1200}>
              <Tooltip title="Notifications" className="item">
                <Button
                  type="text"
                  shape="circle"
                  icon={<IoMdNotificationsOutline />}
                />
              </Tooltip>
              <Tooltip title="Apps">
                <Button
                  type="text"
                  shape="circle"
                  icon={<AppstoreOutlined />}
                />
              </Tooltip>
              <Tooltip title="Monitor">
                <Button
                  type="text"
                  shape="circle"
                  icon={<BarChartOutlined />}
                />
              </Tooltip>
            </MediaQuery>
            <MediaQuery minWidth={480}>
              <div className={`${styles.imsLogo}`}>
                <IMSLogo />
              </div>
            </MediaQuery>
            <Dropdown
              overlay={<ProfileDropDown />}
              placement="bottomRight"
              overlayClassName="shadow-center"
              trigger={["click"]}
              arrow
            >
              <Avatar
                size={{ xs: 36, sm: 32, md: 40 }}
                icon={<UserOutlined />}
              />
            </Dropdown>
          </Space>
        </div>
      </Header>
    </Layout>
  );
};

export default React.memo(NavBar);
