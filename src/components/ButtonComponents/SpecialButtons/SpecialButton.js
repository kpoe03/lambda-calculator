import React from "react";

const SpecialButton = (props) => {
  return (
    <>
      <button className="spec-Btn" onClick={() => props.addSpecial(props.text)}>{props.text}</button>
      </>
  );
};

export default SpecialButton;