import { Table, Tag,  Button, Radio } from "antd";
import DashboardLayout from "@layouts/DashboardLayout";
import { ReactElement } from "react";
import data from "@data/data.json";
import { PostElement } from "data/types/InModules";


const { Column } = Table;

const Stable = () => {
  const columndata =
    data.us.pageDetails.outbound.fedwire.outboundFedwireOutgoing_ctr
      .filter((item) => item.key === "fedwire-internal_controls")[0]
      .details.filter(
        (item) => item.key === "out_fedwire_level1Approval"
      )[0] as unknown as any;
  const column = columndata.data.columns as unknown as Array<PostElement>;
  const dataset =
    data.us.pageDetails.outbound.fedwire.outboundFedwireOutgoing_ctr
      .filter((item) => item.key === "fedwire-internal_controls")[0]
      .details.filter(
        (item) => item.key === "out_fedwire_level1Approval"
      )[0] as unknown as any;
  const datas = dataset.data.dataSource as unknown as any;

  return (
    <>

          
      <Table
      style={{cursor: "pointer"}}
        dataSource={datas}
        size="middle"
        scroll={{ x: true }}
        pagination={{
          pageSizeOptions: ["1", "2"],
          showSizeChanger: true,
          locale: { items_per_page: "" },
          defaultPageSize: datas!.length < 10 ? datas!.length : 10,
        }}
      >
        {column.map((post) => {

          return (
            <>
                {/* <Link
                  href={`${post.url ? post.url : "#"}`}
                  passHref
                  key={post.key}
                >
           */}
           
              <Column
                title={post.title}
                dataIndex={post.dataIndex}
                key={post.key}
                align="center"
                render= {(text) => <a style={{ color:"black"}} href={`${post.url ? post.url : "#"}`} >{text}</a>}

                // render={(post) =><Link
                //   href={`${post.url ? post.url : "#"}`}
                //   passHref
                //   key={post.key}
                // />} 
                
              //   render={(text) => {
              //     return{
                   
              //       children: (text) == "APPROVE" ? <Tag color="blue">{text}</Tag> : <div>{text}</div>
              //     }
              //   }
               
              // }

              />
             
             {/* </Link>  */}
            </>
          );
        })}
      </Table>
      
    </>
  );
};
Stable.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Stable;