import React from "react";
import styles from "../styles/login.module.css";
import "antd/dist/antd.css";
import { Form, Button, Checkbox, Input } from "antd";
import { GoogleOutlined, createFromIconfontCN } from "@ant-design/icons";

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
});
const ColoredLine = () => (
  <div className={styles.list}>
    <hr
      style={{
        color: "red",
        backgroundColor: "grey",
        height: ".1px",
      }}
    />
    <p>or</p>
  </div>
);

const login = () => {
  return (
    <div>
      <div className={styles.card}>
        <div className={styles.logCard}>
          <img
            className={styles.imgCard}
            src={
              "https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            }
          />
        </div>

        <div className={styles.login}>
          <Form
            labelCol={{ span: 10 }}
            wrapperCol={{ span: 24 }}
            autoComplete="off"
          >
            <Form.Item>
              <div>
                <img
                  style={{ width: "200px", position: "relative", top: "30px" }}
                  src={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3I_fSpsIyzwZwp5Q7iAkB_CgyMqijuERjbQwvDJLNe92cKq_huBrZjrcfUSG8QK1xYg&usqp=CAU"
                  }
                />
              </div>
            </Form.Item>
            <Form.Item>
              <div style={{ color: "grey", height: "0px" }}>
                Login with your username and password
              </div>
            </Form.Item>
            <Form.Item
              name=" Name"
              rules={[
                {
                  required: true,
                  message: "Please provide username",
                },
              ]}
            >
              <Input placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                },
                { min: 6 },
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject("Password does not match criteria."),
                },
              ]}
              hasFeedback
            >
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Forgot password
              </a>
            </Form.Item>

            <ColoredLine />

            <Form.Item>
              <Button
                block
                type="primary"
                style={{
                  backgroundColor: "white",
                  color: "#1890ff",
                  border: "none",
                }}
              >
                <GoogleOutlined />
                Login with Google
              </Button>
            </Form.Item>

            <Form.Item>
              <Button
                block
                type="primary"
                style={{
                  backgroundColor: "white",
                  color: "#1890ff",
                  border: "none",
                }}
              >
                <IconFont type="icon-facebook" />
                Login with Facebook
              </Button>
            </Form.Item>

            <Form.Item
              name="agreement"
              wrapperCol={{ span: 25 }}
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject(
                          "To proceed, you need to agree with our terms and conditions"
                        ),
                },
              ]}
            >
              <Checkbox style={{ padding: "30px" }}>
                Agree to our <a href="#">Terms and Conditions</a>
              </Checkbox>
            </Form.Item>
            <Form.Item
              wrapperCol={{ span: 10 }}
              style={{ justifyContent: "center" }}
            >
              <Button block type="primary" htmlType="submit">
                Register
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default login;
