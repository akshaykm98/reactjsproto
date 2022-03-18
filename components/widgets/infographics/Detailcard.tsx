import { DynamicIcon } from "@widgets/DynamicIcon";
import { Card, List } from "antd";
import Text from "antd/lib/typography/Text";
import { InModulesDetails } from "data/types/InModules";
import Link from "next/link";

import React, { ReactNode } from "react";

type Props = {
  title: string | ReactNode;
  color?: string;
  icon?: string | ReactNode;
  details: Array<InModulesDetails>;
};

const Detailcard: React.FC<Props> = (props) => {
  return (
    <>
      <Card
        title={props.title}
        bodyStyle={{ borderRadius: "10px", padding: "5px 0px",minHeight:"300px" }}
      >
        {props.details.map((item) => {
          return (
            <>
              <Link
                href={`${item.url ? item.url : "#"}`}
                passHref
                key={item.key}
              >
                <List
                  key={item.key}
                  itemLayout="horizontal"
                  size="small"
                  style={{ width: "100%", cursor: "pointer" }}
                >
                  <List.Item
                    key={item.key}
                    style={{ margin: 0 }}
                    actions={[
                      <Text
                        key="list-loadmore-edit"
                        style={{
                          color: item.color ? item.color : "blue",
                          height: "100%",
                        }}
                      >
                        {item.count}
                      </Text>,
                    ]}
                  >
                    <List.Item.Meta
                      avatar={<DynamicIcon name={item.icon} size={15} />}
                      title={
                        <Text style={{ color: "#555" }}>{item.title}</Text>
                      }
                    />
                  </List.Item>
                </List>
              </Link>
            </>
          );
        })}
      </Card>
    </>
  );
};

export default Detailcard;
