import React from "react";
import Webcam from "react-webcam";
import { useWindowSize } from "../hooks/useWindowSize";

const TransparentPage: React.FC = () => {
  const size = useWindowSize();
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: size.width,
          height: size.height,
        }}
      >
        <Webcam
          audio={false}
          height={size.height}
          width={size.width}
          videoConstraints={{ facingMode: "environment" }}
        />
      </div>
      <div
        style={{
          height: size.height,
          width: size.width,
        }}
      >
        <div
          style={{
            position: "relative",
            top: 0,
            fontSize: 60,
            fontWeight: 800,
            height: "100vh",
            background: "black",
            mixBlendMode: "hard-light",
          }}
        >
          <p style={{ color: "rgba(255, 255,255, 0.5)" }}>Transparent Page</p>
        </div>
      </div>
    </>
  );
};

export default TransparentPage;
