import { HeatMapOutlined } from "@ant-design/icons";
import { Card, Modal } from "antd";
import React, { useState } from "react";
const { Meta } = Card;
const Project = () => {
  const [isModalOpenCovid, setIsModalOpenCovid] = useState(false);
  const [isModalOpenHr, setIsModalOpenHr] = useState(false);
  const [isModalOpenPizza, setIsModalOpenPizza] = useState(false);
  const [isModalOpenSale, setIsModalOpenSale] = useState(false);
  const [isModalOpenWeb, setIsModalOpenWeb] = useState(false);

  const showModalCovid = () => {
    setIsModalOpenCovid(true);
  };
  const showModalHr = () => {
    setIsModalOpenHr(true);
  };
  const showModalPizza = () => {
    setIsModalOpenPizza(true);
  };
  const showModalSale = () => {
    setIsModalOpenSale(true);
  };
  const showModalWeb = () => {
    setIsModalOpenWeb(true);
  };
  const handleOk = () => {
    setIsModalOpenCovid(false);
    setIsModalOpenHr(false);
    setIsModalOpenPizza(false);
    setIsModalOpenWeb(false);
    setIsModalOpenSale(false);
  };
  const handleCancel = () => {
    setIsModalOpenCovid(false);
    setIsModalOpenHr(false);
    setIsModalOpenPizza(false);
    setIsModalOpenWeb(false);
    setIsModalOpenSale(false);
  };
  return (
    <div style={{ padding: "5px  0 " }}>
      <h1 style={{ fontSize: "50px", marginLeft: "40px" }}>
        <HeatMapOutlined />
        Project
      </h1>
      <div
        style={{
          display: "flex",
        }}
      >
        <div>
          <Card
            hoverable
            style={{
              width: 343,
            }}
            cover={<img alt="example" src="\hinhanh\project\banhang.jpg" />}
            onClick={showModalSale}
          >
            <Meta title="Sales Management (Power BI)" description="9/2022" />
          </Card>
        </div>
        <div>
          <Card
            hoverable
            style={{
              width: 368,
            }}
            onClick={showModalCovid}
            cover={<img alt="example" src="\hinhanh\project\Covid.jpg" />}
          >
            <Meta
              title="Data Analyst COVID-19 (Python & Power Bi)"
              description="9/2023"
            />
          </Card>
        </div>
        <div>
          <Card
            hoverable
            style={{
              width: 460,
            }}
            onClick={showModalHr}
            cover={<img alt="example" src="\hinhanh\project\HR-career.png" />}
          >
            <Meta
              title="
            HR Dashboard Reports (Power BI)"
              description="8/2023
              "
            />
          </Card>
        </div>
        <div>
          <Card
            hoverable
            style={{
              width: 340,
            }}
            cover={<img alt="example" src="\hinhanh\project\pizza.webp" />}
            onClick={showModalPizza}
          >
            <Meta
              title="Pizza Sale Reports (Power BI & SQL)"
              description="3/2023"
            />
          </Card>
        </div>
        <div>
          <Card
            hoverable
            style={{
              width: 410,
            }}
            cover={<img alt="example" src="\hinhanh\project\cafe.jpg" />}
            onClick={showModalWeb}
          >
            <Meta title="Coffee Online Full Stack Web" description="4/2023" />
          </Card>
        </div>
      </div>
      <Modal
        title="Data Analyst COVID-19 (Python & Power Bi)"
        open={isModalOpenCovid}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <ul>
          <li>
            Analyzed COVID-19 ddata using{" "}
            <b style={{ fontWeight: "bold" }}> Python</b>, and{" "}
            <b style={{ fontWeight: "bold" }}>Power Bi </b>yielding critical
            insights on infection rates, trends, and geographical variations;
            provided data-driven recommendations to government agencies for
            targeted interventions and resource allocation.
          </li>
          <li>
            <b style={{ fontWeight: "bold" }}>Visualized </b> findings through
            interactive charts and graphs, aiding in data-driven decision-making
            during the pandemic.
          </li>
        </ul>
      </Modal>
      <Modal
        title="HR Dashboard Reports (Power BI)"
        open={isModalOpenHr}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <ul>
          <li>
            Created comprehensive HR dashboard reports using
            <b style={{ fontWeight: "bold" }}> Power BI </b>
            empowering HR professionals with actionable insights into employee
            performance, promotion, and retrain rates
          </li>
          <li>
            Designed interactive visuals to facilitate workforce planning and
            strategic HR decision-making.
          </li>
        </ul>
      </Modal>
      <Modal
        title="Pizza Sale Reports (Power BI & SQL)"
        open={isModalOpenPizza}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <ul>
          <li>
            Designed and implemented Pizza Sale reports using
            <b style={{ fontWeight: "bold" }}> Power BI</b> to analyze sales
            data, track customer preferences, and optimize product offerings.
          </li>
          <li>
            Provided actionable recommendations to increase sales and improve
            customer satisfaction.
          </li>
          <li>
            Leveraged <b style={{ fontWeight: "bold" }}>SQL</b> to analyze sales
            and revenue data, identifying top-selling products by type and
            individual products using
            <b style={{ fontWeight: "bold" }}> JOIN</b> and
            <b style={{ fontWeight: "bold" }}> Group By</b>
          </li>
          <li>
            Transformed and filtered data by using{" "}
            <b style={{ fontWeight: "bold" }}>aggregating </b> and
            <b style={{ fontWeight: "bold" }}> filtering </b>
            functions to improve the reporting process
          </li>
        </ul>
      </Modal>
      <Modal
        title="Sales Management (Power BI)"
        open={isModalOpenSale}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <ul>
          <li>
            Spearheaded the development of a Sales Management system using{" "}
            <b style={{ fontWeight: "bold" }}>Power BI</b> , enabling real-time
            tracking of sales performance, inventory management, and accurate
            sales forecasts.
          </li>
          <li>
            Created detailed reports presenting revenue, profit percentage,
            daily revenue, and costs, profit by province and region, and revenue
            by region.
          </li>
          <li>
            Identified the <b style={{ fontWeight: "bold" }}>top 10 </b> stores
            and products with the highest and lowest sales, contributing to
            data-driven decision-making and profitability optimization.
          </li>
        </ul>
      </Modal>
      <Modal
        title="COFFEE ONLINE WEBSITE ( Full-stack Web)"
        open={isModalOpenWeb}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <ul>
          <li>Full-stack web with Nodejs(Express) and React Library</li>
          <li>Creating CRUD for sever and MongoDB( mongoose)</li>
          <li>JWT TOKEN for Authentication user</li>
          <li>Frontend: React, Redux toolkit, react query, react router…</li>
          <li>
            Building a website to manage products and orders (admin), api and
            deploy to vercel and render
          </li>
        </ul>
      </Modal>
    </div>
  );
};

export default Project;
