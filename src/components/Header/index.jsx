import React from "react";
import { Position, Title } from "./style";

const Header = () => {
  return (
    <div
      style={{
        backgroundColor: "#3f4743",
        height: "150px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Title>Phan Do Gia Huy</Title>
      <Position>DATA ANALYST</Position>
    </div>
  );
};

export default Header;
