import React from "react";
import "antd/dist/antd.css";
import { Button, Form, Input, Row, Col, Card, Space, Checkbox } from "antd";
import { useRouter } from "next/router";
import Brand from "@widgets/graphics_widgets/Brand";
import Text from "antd/lib/typography/Text";

const Loginform = () => {
  const router = useRouter();

  return (
    <>
      <Row justify="center" align="middle" style={{ minHeight: "100%" }}>
        <Col span={18}  lg={{ span: 15 }} style={{ justifyContent: "center" }}>
          <Card style={{ border: "none" }}>
            <Brand />
            <Text
              style={{
                color: "grey",
                width: "100%",
                justifyContent: "center",
                display: "flex",
                marginTop: 20,
                marginBottom: 20,
              }}
            >
              Login with your username and password
            </Text>
            <Form layout="vertical">
              <Form.Item
                name=" Name"
                rules={[
                  {
                    required: true,
                    message: "Please provide username",
                  },
                ]}
              >
                <Input placeholder="Username" size="large" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                  { min: 6 },
                ]}
              >
                <Input.Password size="large" placeholder="Password" />
              </Form.Item>
              <Form.Item>
                <Row justify="space-between">
                  <Checkbox>Remember me</Checkbox>
                  <a className="login-form-forgot" href="">
                    Forgot password
                  </a>
                </Row>
              </Form.Item>
              <Form.Item>
                <Row justify="end">
                  <Button
                    size="large"
                    style={{ maxWidth: "120px" }}
                    block
                    type="primary"
                    htmlType="submit"
                    onClick={() => router.replace("/dashboard")}
                  >
                    Login
                  </Button>
                </Row>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default Loginform;
