import React from "react";

const NumberButton = (props) => {
  console.log(props);
  return (
    <button className={`number-btn${props.zero ? ' zero': ''}`} onClick={() => props.addNumber(props.text)}> 
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    
      {/* <button onClick={() => props.add(props.text)} className="btn">{ props.text }</button> */}

      {props.text}
    
    </button>
  );
};

export default NumberButton;