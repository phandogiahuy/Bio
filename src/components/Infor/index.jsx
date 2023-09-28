import React from "react";
import { Caunoi, Content, Img, Nd } from "./style";
import { Image } from "antd";

const Infor = () => {
  return (
    <div
      style={{
        display: "flex",
        padding: "30px 90px 0 90px",
      }}
    >
      <Img style={{ flex: 1 }}>
        <Image src="/hinhanh/chandung/hinh.jpg" width={400} />
      </Img>
      <Content style={{ flex: 3, marginTop: "-10px" }}>
        <h1 style={{ fontSize: "50px", fontFamily: 700 }}>About me</h1>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>
            <Nd>
              I am a Fresher Developer with Highly motivated and detail-oriented
              Data Analyst with a Bachelor’s degree in Computer Science and
              about 1 years of experience in data, specializing in SQL Server.
              Committed to delivering data-driven insights by translating
              customer needs into actionable data models, reports, and
              dashboards. My desire is to grow the business based on the data I
              discover and analyze.
            </Nd>
          </div>
          <Caunoi>
            "Data is not just a bunch of numbers; They're stories waiting to be
            told"
            <div style={{ fontSize: "20px" }}>Amanuel Gebremeskel</div>
          </Caunoi>
        </div>
      </Content>
    </div>
  );
};

export default Infor;
