import { Table } from "antd";
import DashboardLayout from "@layouts/DashboardLayout";
import { ReactElement } from "react";
import data from "@data/data.json";

const Stable = () => {
  const columndata =
    data.us.pageDetails.outbound.fedwire.outboundFedwireOutgoing_ctr
      .filter((item) => item.key === "fedwire-internal_controls")[0]
      .details.filter(
        (item) => item.key === "out_fedwire_level2Approval"
      )[0] as unknown as any;
  const column = columndata.data.columns as unknown as any;
  const dataset =
    data.us.pageDetails.outbound.fedwire.outboundFedwireOutgoing_ctr
      .filter((item) => item.key === "fedwire-internal_controls")[0]
      .details.filter(
        (item) => item.key === "out_fedwire_level2Approval"
      )[0] as unknown as any;
  const datas = dataset.data.dataSource as unknown as any;
  return (
    <>
      <Table
        dataSource={datas}
        columns={column}
        size="middle"
        scroll={{ x: true }}
        pagination={{
          pageSizeOptions: ["1", "2"],
          showSizeChanger: true,
          locale: { items_per_page: "" },
          defaultPageSize: datas!.length < 10 ? datas!.length : 10,
        }}
        style={{ width: "100%" }}
      />
    </>
  );
};
Stable.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Stable;
