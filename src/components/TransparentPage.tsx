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
          width: "100vw",
          height: "100vh",
          zIndex: -1,
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
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
        }}
      >
        <p
          style={{
            fontSize: 60,
            fontWeight: 800,
            color: "white",
            opacity: 0.5,
          }}
        >
          Transparent Page
        </p>
      </div>
    </>
  );
};

export default TransparentPage;
