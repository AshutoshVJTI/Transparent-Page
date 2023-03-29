import React from "react";
import { Camera } from "react-camera-pro";

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
          fontSize: 60,
          fontWeight: 800,
          height: "100vh",
          background: "black",
          mixBlendMode: "hard-light",
          paddingTop: 5,
          color: "rgba(255, 255,255, 0.5)"
        }}
      >
        <p className="container">
          Transparent Page
        </p>
      </div>
    </>
  );
};

export default TransparentPage;
