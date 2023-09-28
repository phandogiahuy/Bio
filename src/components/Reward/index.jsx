import { GitlabOutlined } from "@ant-design/icons";
import { Card } from "antd";
import React from "react";
const { Meta } = Card;

const Reward = () => {
  return (
    <div style={{ flex: 1 }}>
      <h1 style={{ fontSize: "50px", marginLeft: "50px" }}>
        <GitlabOutlined />
        Reward
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginLeft: "30px",
        }}
      >
        <div style={{ marginRight: "50px" }}>
          <Card
            hoverable
            cover={<img alt="example" src="\hinhanh\reward\bc.jpg" />}
            style={{ width: 370 }}
          >
            <Meta
              title="3rd History Contest For Good Student HCM"
              description="2018"
            />
          </Card>
        </div>
        <div>
          <Card
            hoverable
            cover={<img alt="example" src="\hinhanh\reward\hc.jpg" />}
            style={{ width: 370 }}
          >
            <Meta
              title="Gold Medal History Contest 30-4 HCM"
              description="2017"
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Reward;
