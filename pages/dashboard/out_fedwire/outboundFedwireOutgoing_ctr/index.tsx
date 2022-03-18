import DashboardLayout from "@layouts/DashboardLayout";
import StatusCard from "@widgets/infographics/StatusCard";
import Detailcard from "@widgets/infographics/Detailcard";
import { Col, Row } from "antd";
import Head from "next/head";
import { ReactElement } from "react";
import data from "@data/data.json";
import { InModule } from "data/types/InModules";

const OutboundFedwireOutgoing_ctr = () => {
  const details: InModule = data.us.pageDetails.outbound
    .fedwire as unknown as InModule;

  return (
    <>
      <Head>
        <title>IMS | Manual Entry</title>
      </Head>

      <Row
        gutter={[24, 24]}
        style={{ background: "transparent", marginBottom: "10px" }}
      >
        {details.outboundFedwireOutgoing_ctr.map((post) => {
          return (
            <Col
              span={24}
              sm={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 6 }}
              key={post.key}
            >
              <StatusCard
                title={post.title}
                value={post.total}
                color={post.color}
                icon={post.icon}
              />
            </Col>
          );
        })}
      </Row>
      <Row gutter={[24, 24]} style={{ background: "transparent" }}>
        {details.outboundFedwireOutgoing_ctr.map((item) => {
          return (
            <Col
              span={24}
              sm={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 6 }}
              key={item.key}
            >
              <Detailcard
                title={item.title}
                details={item.details}
                icon={item.icon}
                key={item.key}
              />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default OutboundFedwireOutgoing_ctr;

OutboundFedwireOutgoing_ctr.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
