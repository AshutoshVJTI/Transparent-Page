import React from "react";

const Content = () => {
  return (
    <>
      <div style={{ fontSize: 36, fontWeight: 800 }}>Transparent Page</div>
      <div style={{ fontSize: 24, fontWeight: 700 }}>
        This is a transparent page created using React and react-camera-pro
        library.
      </div>
      <a
        style={{
          padding: "0px 20px",
          fontSize: 18,
          fontWeight: 700,
          backgroundColor: "rgba(255, 3, 62, 0.5)",
          borderRadius: 10,
          color: "inherit",
          textDecoration: "none",
        }}
        href={"https://github.com/AshutoshVJTI/Transparent-Page"}
        target="blank"
      >
        <p>GITHUB</p>
      </a>
      <div
        style={{
          backgroundColor: "rgba(255, 255 ,255 , 0.5)",
          width: "90%",
          height: 2,
        }}
      />
      <p style={{ fontSize: 24, fontWeight: 700, margin: '10px 0px' }}>Demonstration Cards</p>
      <div style={{ display: "flex", gap: 20 }}>
        <button
          style={{
            padding: "25px 50px",
            fontSize: 18,
            fontWeight: 700,
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            borderRadius: 10,
            color: "inherit",
            textDecoration: "none",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 15,
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "200px",
              height: 4,
              backgroundColor: "rgba(255, 255, 255, 0.5)",
            }}
          />
          <div
            style={{
              width: "100px",
              height: 2,
              backgroundColor: "rgba(255, 255, 255, 0.5)",
            }}
          />
          <div
            style={{
              width: "100px",
              height: 2,
              backgroundColor: "rgba(255, 255, 255, 0.5)",
            }}
          />
        </div>
      </div>
      <div style={{ display: "flex", gap: 20 }}>
        <button
          style={{
            padding: "25px 50px",
            fontSize: 18,
            fontWeight: 700,
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            borderRadius: 10,
            color: "inherit",
            textDecoration: "none",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 15,
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "200px",
              height: 4,
              backgroundColor: "rgba(255, 255, 255, 0.5)",
            }}
          />
          <div
            style={{
              width: "100px",
              height: 2,
              backgroundColor: "rgba(255, 255, 255, 0.5)",
            }}
          />
          <div
            style={{
              width: "100px",
              height: 2,
              backgroundColor: "rgba(255, 255, 255, 0.5)",
            }}
          />
        </div>
      </div>
      <div style={{ display: "flex", gap: 20 }}>
        <button
          style={{
            padding: "25px 50px",
            fontSize: 18,
            fontWeight: 700,
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            borderRadius: 10,
            color: "inherit",
            textDecoration: "none",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 15,
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "200px",
              height: 4,
              backgroundColor: "rgba(255, 255, 255, 0.5)",
            }}
          />
          <div
            style={{
              width: "100px",
              height: 2,
              backgroundColor: "rgba(255, 255, 255, 0.5)",
            }}
          />
          <div
            style={{
              width: "100px",
              height: 2,
              backgroundColor: "rgba(255, 255, 255, 0.5)",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Content;
