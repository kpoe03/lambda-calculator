import React from "react";
import "./Display.css";
const Display = (props) => {
  return (
     <div>
     {props.number} {props.operators}
     </div>
  )
};

Display.defaultProps = {
  number: 0,
}
export default Display;