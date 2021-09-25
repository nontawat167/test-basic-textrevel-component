import React from "react";

const Circle = (props) => {
  const { size, color, text, func } = props;

  const css = {
    width: size || 100,
    height: size || 100,
    borderRadius: "50%",
    backgroundColor: `${color || "purple"}`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div
      style={css}
      onClick={() => {
        func(color);
      }}
    >
      {text && <div style={{ color: "white" }}>{text}</div>}
    </div>
  );
};

export default Circle;
