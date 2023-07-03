import React from "react";

const Divider = ({
  horizon = true,
  color = "rgba(120, 120, 120, 1)",
  style = "solid",
}) => {
  return (
    <div
      style={{
        width: horizon ? "100%" : 0,
        height: horizon ? 0 : "100%",
        borderTop: horizon ? `1px ${style} ${color}` : "none",
        borderRight: horizon ? "none" : `1px ${style} ${color}`,
        marginBottom: "10px",
      }}
    />
  );
};

export default Divider;
