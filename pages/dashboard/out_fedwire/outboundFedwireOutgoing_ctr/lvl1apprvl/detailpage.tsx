import { Tabs } from "antd";
import { Card } from "antd";
import { Menu, Dropdown, Button } from "antd";
import { Row, Col } from "antd";
import DashboardLayout from "@layouts/DashboardLayout";
import { ReactElement } from "react";
import data from "@data/data.json";
import { detailElement , detailModule, detailGroup } from "data/types/InModules";
import { Collapse } from 'antd';
import style from '../../../../../styles/Home.module.css'

const { Panel } = Collapse;

const { TabPane } = Tabs;


function callback(key: any) {
  console.log(key);
}

const detail = data.detailpagedata.filter((item) => item.key === "submitted-details") as unknown as any as Array<detailGroup>;
const detaildropdown = data.detailpagedata.filter((item) => item.key !== "submitted-details") as unknown as any as Array<detailGroup>;
const Demo = () => (

 
  <>
  
              <Row gutter={[16,16]} style={{ justifyContent: "center" }}>
      <Col xs={24} xl={14}>
        <Row gutter={[16,16]}>
          <Col span={24}>
          {detail.map((post) => {
          return (
            
            <>
            <Card size="small" title={post.title}  >
          <Row>
          {post.details.map((item) => {
          return (
            <>
            <Col span={8}>
              <p style={{fontSize:"12px"}}>{item.title}:&nbsp;<small style={{fontSize:"13px",color:"grey"}}>{item.details.title as unknown as any  }</small></p>
            </Col>
            </>
            );
          })}
          </Row>
        </Card>
             </>
          );
        })}
          </Col>
          <Col span={24}>

          {detaildropdown.map((post) => {
          return (
            
            <>
             <Collapse expandIconPosition="right" bordered={false} style={{backgroundColor:"#fff"}}>
              <Panel header={post.title} key="1"  >
              <Row style={{paddingTop:"10px"}}>
              {post.details.map((item) => {
          return (
            <>
            <Col span={8}>
              <p style={{fontSize:"12px"}}>{item.title}:&nbsp;<small style={{fontSize:"13px",color:"grey",fontWeight:"300px"}}>{item.details.title as unknown as any  }</small></p>
            </Col>
            </>
            );
          })}
          </Row>
              </Panel>
             </Collapse>
            
             </>
          );
        })}
          
          </Col>
        </Row>
     
       
      </Col>
      <Col xs={24} xl={10}>
        <Row gutter={[16,16]}>
          <Col span={24}>
          <Card size="small" title="Received Files"  >
          hello
        </Card>
          </Col>
          <Col span={24}>
          <Card size="small" title="Message Created"  >
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Tab 1" key="1">
              hello
            </TabPane>
            <TabPane tab="Tab 2" key="2">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="Tab 3" key="3">
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
        </Card>
        </Col>
          <Col span={24}>
          <Card size="small" title="Activity" >
          <Tabs defaultActiveKey="1" onChange={callback} >
            <TabPane tab="Comment" key="1" >
              Content of Tab Pane 1
            </TabPane>
            <TabPane tab="Notes" key="2">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="History" key="3">
              Content of Tab Pane 3
            </TabPane>
            <TabPane tab="Track Changes" key="4">
              Content of Tab Pane 3
            </TabPane>
            <TabPane tab="Trail" key="5">
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
        </Card>
          </Col>
        </Row>
        
       
        
      </Col>
      
    </Row>
    <Row >
    <Col span={24}>
      
      <Button type="primary">Approve</Button>
      <Button type="primary" danger>
        Reject
      </Button>
      <Button>Back</Button>
    </Col>
    </Row>
 
      
   
    
  </>
);

Demo.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Demo;
