import React from "react";

const Rectangle = ({ width, height, color }) => {
  const style = {
    width: width,
    height: height,
    backgroundColor: color,
  };

  return <div className="rectangle" style={style}></div>;
};

export default Rectangle;