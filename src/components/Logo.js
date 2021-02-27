import React from "react";
import logo from "../img/logo-endless.svg";

const Logo = () => {
  return (
    <div>
      <img
        src={logo}
        className="logo"
        alt="endless-logo"
        style={{
          width: "100px",
          filter:
            "invert(87%) sepia(21%) saturate(7478%) hue-rotate(115deg) brightness(102%) contrast(95%)",
          marginLeft: "10rem"
        }}
      />
    </div>
  );
};

export default Logo;
