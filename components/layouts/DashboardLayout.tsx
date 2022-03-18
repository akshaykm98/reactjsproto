import { Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import styles from "@layoutsStyles/DashboardLayout.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@store/store";
import { useMediaQuery } from "react-responsive";
import DashboardBreadcrumb from "@modules/DashboardBreadcrumb";
import NavBar from "@modules/NavBar";
import DashboardSider from "@modules/DashboardSider";
import Head from "next/head";
import { closeNav, openNav, toggleNav } from "@store/uiSlice";
import { useSize } from "ahooks";

const DashboardLayout: React.FC = (props) => {
  // redux dispatch function
  const dispatch = useDispatch();
  // sidebar toggle state from redux store
  let toggle = useSelector((state: RootState) => state.ui_state.sidebarToggle);

  const ref = useRef() as React.MutableRefObject<HTMLDivElement>;
  const size = useSize(ref);

  // Drawer propertice
  const showNavMenu = useMediaQuery({ query: "(min-width: 1200px)" });
  const sideMenu = useMediaQuery({ query: "(min-width: 480px)" });
  const [visible, setVisible] = useState(false);

  const [windowSize, setwindowSize] = useState<number>(size?.width!); // 100vw

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  useEffect(() => {
    if (!sideMenu) {
      setwindowSize(size?.width!);
    } else {
      if (toggle) {
        setwindowSize(size?.width! - 80);
      } else {
        setwindowSize(size?.width! - 300);
      }
    }
  }, [sideMenu, size?.width, toggle]);

  useEffect(() => {
    let nav = showNavMenu ? toggle : true;
    if (nav) dispatch(openNav());
    else dispatch(closeNav());
  }, [dispatch, showNavMenu, sideMenu, toggle]);

  return (
    <>
      <Head>
        <title></title>
      </Head>
      <NavBar toggle={toggle} drawerOpen={showDrawer} />
      <div className={`${styles.dashboardContentLayout}`} ref={ref}>
        <DashboardSider
          showDrawer={showDrawer}
          visibleDrawer={visible}
          sidebarToggle={toggle}
          showNavMenu={showNavMenu}
          drawerClose={onClose}
        />
        <div className={`${styles.wrapper}`}>
          {/* {console.log(onScreen)} */}
          <Layout
            className={`${styles.layout}`}
            style={{
              overflowX: "hidden",
              width: `${windowSize}px`,
            }}
          >
            <DashboardBreadcrumb style={{ width: `${windowSize}px` }} />
            <Content
              className={`${styles.content}`}
              style={{ width: `${windowSize}px` }}
            >
              {props.children}
            </Content>
          </Layout>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
