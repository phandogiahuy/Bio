import React from "react";
import { Link, ListItem, Right, SocialIcon, Title } from "./style";
import { List } from "antd";
import {
  AimOutlined,
  FacebookOutlined,
  GithubOutlined,
  InstagramOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#649161",
        height: "250px",
      }}
    >
      <Right>
        <center style={{ fontSize: "50px", fontWeight: 600 }}>
          Contact Me
        </center>
        <div style={{ display: "flex" }}>
          <SocialIcon style={{ flex: 1 }}>
            <Link
              href="https://www.facebook.com/giahuy.6200/"
              style={{ textDecoration: "none" }}
            >
              <FacebookOutlined style={{ fontSize: "45px", color: "white" }} />
              <span style={{ color: "white" }}>
                https://www.facebook.com/giahuy.6200/
              </span>
            </Link>
          </SocialIcon>

          <SocialIcon style={{ flex: 1 }}>
            <Link
              href="https://github.com/phandogiahuy?tab=repositories"
              style={{ textDecoration: "none" }}
            >
              <GithubOutlined style={{ fontSize: "45px", color: "white" }} />
              <span style={{ color: "white" }}>
                https://github.com/phandogiahuy
              </span>
            </Link>
          </SocialIcon>
          <SocialIcon style={{ flex: 1 }}>
            <PhoneOutlined style={{ fontSize: "45px" }} />
            <span style={{ fontWeight: 600 }}>0707323959</span>
          </SocialIcon>
          <SocialIcon style={{ flex: 1 }}>
            <MailOutlined style={{ fontSize: "45px" }} />
            <span style={{ fontWeight: 600 }}>phandogiahuy2000@gmail.com</span>
          </SocialIcon>
          <SocialIcon style={{ flex: 1 }}>
            <AimOutlined style={{ fontSize: "45px" }} />
            <span style={{ fontWeight: 600 }}>Thu Duc City, HCM City</span>
          </SocialIcon>
        </div>
      </Right>
    </div>
  );
};

export default Footer;
