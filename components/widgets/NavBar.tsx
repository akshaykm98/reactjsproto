import { Header } from "antd/lib/layout/layout";
import React from "react";
import Brand from "@widgets/graphics_widgets/Brand";
import styles from "../styles/componets/NavBar.module.css";

type Props = {};

const NavBar: React.FC<Props> = (props) => {
  return (
    <>
      <Header
        className={`${styles.navBar}`}
        style={{ position: "fixed", zIndex: 10, width: "100%" }}
      >
        <Brand />
      </Header>
    </>
  );
};
export default NavBar;
