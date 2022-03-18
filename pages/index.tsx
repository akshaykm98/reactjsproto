import React from "react";
import { Row, Col } from "antd";
import Loginbtn from "../components/widgets/logincomponents/loginButton";
import Loginform from "../components/widgets/logincomponents/loginform";
import Layout, { Content, Header } from "antd/lib/layout/layout";
import { useMediaQuery } from "react-responsive";

const Login = () => {
  const showgrapics = useMediaQuery({ query: "(min-width: 768px)" });
  return (
    <>
      <Row style={{ height: "100vh" }}>
      
          <Col xs={24} sm={12} style={{ background: "#194c75" }}></Col>
       
        <Col span={24} md={12} style={{ height: "100%" }}>
          <Layout style={{ height: "100%" }}>
            <Header style={{ background: "white", border: "none" }}>
              <Loginbtn />
            </Header>
            <Content style={{ background: "#fff" }}>
              <Loginform />
            </Content>
          </Layout>
        </Col>
      </Row>
    </>
  );
};

export default Login;
