import { EditOutlined } from "@ant-design/icons";
import { Card, Divider } from "antd";
import React from "react";
import Experience from "../Experience";
const { Meta } = Card;
const Education = () => {
  return (
    <div
      style={{
        padding: "5px 40px 0 40px",
        display: "flex",
      }}
    >
      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: "50px" }}>
          <EditOutlined />
          Education
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <div>
            <Card
              hoverable
              cover={<img alt="example" src="\hinhanh\education\tdt.png" />}
              style={{ width: 430 }}
            >
              <Meta
                title="Ton Duc Thang University"
                description="2018 - 2023"
              />
            </Card>
          </div>
          <div style={{ marginTop: "20px" }}>
            <Card
              hoverable
              cover={<img alt="example" src="\hinhanh\education\thuduc.png" />}
              style={{ width: 220 }}
            >
              <Meta title="Thu Duc High School" description="2015 - 2018" />
            </Card>
          </div>
        </div>
      </div>
      <Divider type="vertical" style={{ width: "10%" }} />
      <Experience />
    </div>
  );
};

export default Education;
