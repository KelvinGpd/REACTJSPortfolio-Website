import React from "react";
import useTypewriter from "react-typewriter-hook";

const Typewriter = ({ text }) => {
  const typedText = useTypewriter(text);

  return <div>{typedText}</div>;
};

export default Typewriter;
