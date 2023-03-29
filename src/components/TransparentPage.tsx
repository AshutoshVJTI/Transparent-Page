import React from "react";
import { Camera } from "react-camera-pro";
import Content from "./Content";

const TransparentPage: React.FC = () => {
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
        }}
      >
        <Camera aspectRatio={"cover"} facingMode="environment" errorMessages={{}} />
      </div>
      <div
        style={{
          position: "relative",
          top: 0,
          height: "calc(100vh + 25px)",
          background: "black",
          mixBlendMode: "hard-light",
          paddingTop: 5,
          color: "rgba(255, 255,255, 0.5)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: 'center'
        }}
      >
        <Content />
      </div>
    </>
  );
};

export default TransparentPage;
