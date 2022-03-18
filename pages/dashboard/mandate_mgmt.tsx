import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import DashboardLayout from "@layouts/DashboardLayout";
import StatusCard from "@widgets/infographics/StatusCard";
import { Col, Row } from "antd";
import { InModuleGroup } from "data/types/InModules";
import Head from "next/head";
import { ReactElement } from "react";
import data from "../../data/json/data.json";
const MandateMgmt = () => {
  const details: InModuleGroup = data.us
    .pageDetails as unknown as InModuleGroup;
  const dataContent = details.outbound.outboundFedwireOutgoing_ctr;
  return (
    <>
      <Head>
        <title>IMS | Manual Entry</title>
      </Head>
      <Row gutter={[24, 24]} style={{ background: "transparent" }}>
        <Col
          span={24}
          sm={{ span: 24 }}
          md={{ span: 8 }}
          style={{ background: "transparent" }}
        >
          <StatusCard
            title={details.data}
            value="45"
            color="#3f8600"
            icon={<ArrowUpOutlined />}
          />
        </Col>
        <Col span={24} sm={{ span: 24 }} md={{ span: 8 }}>
          <StatusCard
            title="Outgoing"
            value="53"
            color="#096dd9"
            icon={<ArrowDownOutlined />}
          />
        </Col>
        <Col span={24} sm={{ span: 24 }} md={{ span: 8 }}>
          <StatusCard
            title="Exception"
            value="6"
            color="#b40000"
            icon={"ImWarning"}
          />
        </Col>
        <Col></Col>
      </Row>
    </>
  );
};

export default MandateMgmt;

MandateMgmt.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
