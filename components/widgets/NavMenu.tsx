import { Button, Col, Drawer, Row, Space } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import styles from "./NavMenu.module.scss";
import data from "@data/data.json";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

type Props = {};

let menus = data.navdata;
const NavMenu = (props: Props) => {
  const [visible, setVisible] = useState(false);
  const lg = useMediaQuery({ query: "(min-width: 880px)" });
  const [selected, setselected] = useState("");
  const router = useRouter();
  const toggle = () => {
    setVisible(!visible);
  };
  const onClose = () => {
    setVisible(false);
  };
  useEffect(() => {
    if (!router.route.split("/")[2]) {
      setselected("home");
    } else {
      setselected(router.route.split("/")[2]);
    }
  }, [router.route]);
  const menu = (
    <div className={`${styles.navMenu}`}>
      {lg ? (
        menus.map((item) => {
          return (
            <Link href={item.url} key={item.id} passHref>
              <Button
                type="text"
                className={`${styles.menuItem} ${
                  lg ? null : styles.marginActive
                }`}
              >
                {item.nav}
              </Button>
            </Link>
          );
        })
      ) : (
        <Button
          shape="circle"
          type="text"
          onClick={toggle}
          style={{
            margin: 10,
            // border: "2px solid #eaeaea",
            height: "50px",
            width: "50px",
          }}
          icon={
            <BsFillMenuButtonWideFill
              size={20}
              style={{ marginTop: "5px" }}
              color="#164d74"
            />
          }
        />
      )}
    </div>
  );
  return (
    <>
      {lg ? (
        menu
      ) : (
        <>
          {menu}
          <Drawer
            placement="right"
            visible={visible}
            closeIcon={null}
            onClose={onClose}
            extra={
              <Space>
                <Button
                  size="large"
                  shape="round"
                  icon={<AiOutlineClose style={{ marginTop: "5px" }} />}
                  onClick={onClose}
                ></Button>
              </Space>
            }
          >
            <Row gutter={24}>
              {menus.map((item) => {
                return (
                  <Link href={item.url} passHref key={item.id}>
                    <Col
                      span={24}
                      style={{ justifyContent: "center", display: "flex" }}
                    >
                      <Button
                        type="text"
                        className={`${styles.menuItem} ${
                          lg ? null : styles.marginActive
                        }`}
                      >
                        {item.nav}
                      </Button>
                    </Col>
                  </Link>
                );
              })}
            </Row>
          </Drawer>
        </>
      )}
    </>
  );
};

export default NavMenu;
