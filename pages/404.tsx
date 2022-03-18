import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Col, Layout, Row } from "antd";
import { Content } from "antd/lib/layout/layout";
import Link from "next/link";
import React from "react";
import Icon404 from "@widgets/graphics_widgets/404Icon";
import Brand from "@widgets/graphics_widgets/Brand";
import styles from "@styles/404.module.scss";
import Container from "@widgets/Container";

function Custom404() {
  return (
    <>
      <Layout>
        <Content className={`${styles.content}`}>
          <Container className={`${styles.container}`}>
            <Row gutter={24} justify="center" align="middle" className={`${styles.row}`}>
              <Col span={24}>
                <div className={`${styles.brand}`}>
                  <Brand />
                </div>
              </Col>
              <Col span={24}>
                <div className={`${styles.title}  `}>
                  <h1>Oops! Page Not Found</h1>
                </div>
                <div className={`${styles.icon}`}>
                  <Icon404 className={`${styles.iconImg}`} />
                </div>
              </Col>
              <Col span={24}>
                <div className={`${styles.action}`}>
                  <Link href="/dashboard" passHref>
                    <Button
                      type="link"
                      icon={<ArrowLeftOutlined />}
                      className={`${styles.txt}`}
                    >
                      Go Back to Home
                    </Button>
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </Content>
      </Layout>
    </>
  );
}

export default Custom404;
