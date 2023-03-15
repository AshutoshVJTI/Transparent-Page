import React from "react";
import Webcam from "react-webcam";
import { useWindowSize } from "../hooks/useWindowSize";

const TransparentPage: React.FC = () => {
  const size = useWindowSize();
  return (
    <>
      <Webcam
        audio={false}
        style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }}
        height={size.height}
        width={size.width}
        videoConstraints={{ facingMode: "environment" }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "rgba(0, 0, 0, 0.5)",
          fontSize: 60,
        }}
      >
        Transparent Page
      </div>
    </>
  );
};

export default TransparentPage;
