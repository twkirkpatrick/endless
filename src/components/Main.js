import React from "react";
import background from "../img/photo-couch.jpg";
import Content from "./Content";

const Main = () => {
  return (
    <main
      style={{
        background: `url(${background}) no-repeat center center fixed`,
        backgroundSize: "cover",
        width: "100%",
        height: "100vh",
        position: "relative"
      }}
    >
      <Content />
    </main>
  );
};

export default Main;
