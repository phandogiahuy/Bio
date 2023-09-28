import { EditOutlined, NodeIndexOutlined } from "@ant-design/icons";
import { Card } from "antd";
import React from "react";
const { Meta } = Card;
const Experience = () => {
  return (
    <div style={{ flex: 1 }}>
      <h1 style={{ fontSize: "50px" }}>
        <NodeIndexOutlined />
        Experience
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
            cover={<img alt="example" src="\hinhanh\kinh nghiem\Byte.webp" />}
            style={{ width: 350 }}
          >
            <Meta
              title="Byte Venture - Crypto Marketing Agency"
              description="6/2021 - 2/2022"
            />
          </Card>
        </div>
        <div>
          <Card
            hoverable
            cover={<img alt="example" src="\hinhanh\kinh nghiem\zigvy.png" />}
            style={{ width: 235 }}
          >
            <Meta title="Zigvy Corporation" description="1/2023 - 8/2023" />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Experience;
