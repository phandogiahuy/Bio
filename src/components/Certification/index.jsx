import { Card, List } from "antd";
import React from "react";
import { SafetyCertificateOutlined } from "@ant-design/icons";
import Reward from "../Reward";
const data = [
  "Microsoft Office Specialist Word & Powerpoint   ",
  "Introduction to Data Analyst on Coursera platform",
  "Excel basics for Data Analysis on Coursera platform",
  "Introduction to Statistics on Coursera platform",
  "Basic Python",
  "HTML, CSS, and Javascript for Web Developers",
  "Aptis 157 ( Ielts 6.0 & Writing 42/50) ",
];

const Certification = () => {
  return (
    <div style={{ padding: "5px 40px 0 40px", display: "flex" }}>
      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: "50px" }}>
          <SafetyCertificateOutlined />
          Certification
        </h1>
        <List
          size="large"
          bordered
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <p style={{ fontWeight: 400, fontSize: "25px" }}>{item}</p>
            </List.Item>
          )}
        />
      </div>
      <Reward />
    </div>
  );
};

export default Certification;
