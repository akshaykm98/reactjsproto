import { ArrowUpOutlined } from "@ant-design/icons";
import { DynamicIcon } from "@widgets/DynamicIcon";
import { Card, Statistic } from "antd";
import React, { ReactNode } from "react";

type Props = {
  title: string | ReactNode;
  color?: string;
  icon?: string | ReactNode;
  value: string | number;
};

const StatusCard: React.FC<Props> = (props) => {
  return (
    <Card
      bodyStyle={{ borderBottom: "5px solid #ccc" }}
    >
      <Statistic
        title={
          typeof props.title === "string" ? <h1>{props.title}</h1> : props.title
        }
        value={props.value}
        precision={0}
        valueStyle={{ color: props.color ? props.color : "#555" }}
        prefix={
          props.icon ? (
            typeof props.icon === "string" ? (
              <DynamicIcon name={props.icon} style={{ paddingTop: "5px" }} />
            ) : (
              props.icon
            )
          ) : null
        }
      />
    </Card>
  );
};

export default StatusCard;
