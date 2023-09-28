import { HeatMapOutlined } from "@ant-design/icons";
import { Card } from "antd";
import React from "react";
const { Meta } = Card;

const Skills = () => {
  return (
    <div style={{ padding: "5px 40px 0 40px" }}>
      <h1 style={{ fontSize: "50px" }}>
        <HeatMapOutlined />
        Skills
      </h1>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
          <Card
            hoverable
            style={{
              width: 390,
            }}
            cover={
              <img
                alt="example"
                src="\hinhanh\kynang\Data-Visualization_Featured-Image-1.webp"
              />
            }
          >
            <Meta title="Data Visualization" description="Power Bi" />
          </Card>
        </div>
        <div>
          <Card
            hoverable
            style={{
              width: 350,
            }}
            cover={<img alt="example" src="\hinhanh\kynang\Office.webp" />}
          >
            <Meta
              title="Microsoft Office"
              description="PowerPoint, Word, Excel"
            />
          </Card>
        </div>
        <div>
          <Card
            hoverable
            style={{
              width: 420,
            }}
            cover={<img alt="example" src="\hinhanh\kynang\Programing.jfif" />}
          >
            <Meta title="Programing Language" description="Python" />
          </Card>
        </div>
        <div>
          <Card
            hoverable
            style={{
              width: 420,
            }}
            cover={
              <img
                alt="example"
                src="\hinhanh\kynang\web-programming-languages-1.jpg"
              />
            }
          >
            <Meta
              title="Web Programing"
              description="HTML, CSS, JS, ReactJS, NodeJs"
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Skills;
