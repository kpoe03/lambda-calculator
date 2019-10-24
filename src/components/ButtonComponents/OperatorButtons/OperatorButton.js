import React from "react";

const OperatorButton = (props) => {
  console.log("OperatorButton props", props);
  return (
    <>
     <button className="oper-Btn" onClick={() => props.addOperator(props.text.value)}>{props.text.char}</button>
     </>
  );
};

export default OperatorButton; 