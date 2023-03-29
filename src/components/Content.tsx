import React from "react";

const Content = () => {
  return (
    <>
      <p style={{ fontSize: 28, fontWeight: 700 }}>Translucent Page</p>
      <p style={{ fontSize: 20, fontWeight: 600 }}>This is a translucent page {<br />} created using React</p>
      <a
        style={{
          padding: 10,
          fontSize: 18,
          fontWeight: 700,
          backgroundColor: "rgba(255, 3, 62, 0.5)",
          color: 'inherit',
        }}
        href={"https://github.com/AshutoshVJTI/Transparent-Page"}
        target="blank"
      >
        GITHUB
      </a>
    </>
  );
};

export default Content;
