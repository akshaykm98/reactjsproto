import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import { useRouter } from "next/router";
import React, { CSSProperties } from "react";
import styles from "@moduleStyles/DashboardBreadcrumb.module.scss";

type Props = {
  style?: CSSProperties;
};

const DashboardBreadcrumb = (props: Props) => {
  const router = useRouter();
  return (
    <div className={`${styles.wrapper}`} style={props.style}>
      <Breadcrumb separator={`|`}>
        {router.asPath.split("/").map((item, index, array) => {
          if (index === 0) {
            return;
          } else if (index === 1) {
            return (
              <Breadcrumb.Item
                key={index}
                onClick={() => router.push(array.slice(0, index + 1).join("/"))}
              >
                <HomeOutlined />
              </Breadcrumb.Item>
            );
          } else {
            return (
              <Breadcrumb.Item
                key={index}
                onClick={() => router.push(array.slice(0, index + 1).join("/"))}
                className={`${styles.cursorPointer}`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Breadcrumb.Item>
            );
          }
        })}
      </Breadcrumb>
    </div>
  );
};

export default DashboardBreadcrumb;
