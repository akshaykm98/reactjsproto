import DashboardLayout from "@layouts/DashboardLayout";
import Brand from "@widgets/graphics_widgets/Brand";
import IMSLogo from "@widgets/graphics_widgets/IMSLogo";
import { Card, Typography } from "antd";
import { Content, Footer } from "antd/lib/layout/layout";
import Head from "next/head";
import { ReactElement } from "react";

const { Title } = Typography;
const Dashboard = () => {
  return (
    <>
      <Head>
        <title>ECSFin | Home</title>
      </Head>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          height: "100%",
          alignContent: "space-between",
        }}
      >
        <Card
          style={{
            textAlign: "center",
            backgroundColor: "transparent",
            width: "100%",
            height: "calc(100% - 60px)",
            display: "grid",
            alignItems: "center",
          }}
        >
          <div style={{ padding: "15px" }}>
            <IMSLogo />
          </div>
          <Title level={5}>Integrated Messaging Services, v 5.2.0</Title>
          <Title level={5}>A series of Transaction Processing Solutions</Title>
        </Card>
        <Footer style={{ textAlign: "center", width: "100%", height: "60px" }}>
          Copyright © 2022 ECS Fin
        </Footer>
      </div>
    </>
  );
};

export default Dashboard;

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
