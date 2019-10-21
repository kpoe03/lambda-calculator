import React from "react";
import SpecialButton from "./SpecialButton";
import { specials } from '../../../data';

//import any components needed

//Import your array data to from the provided data file

const Specials = (props) => {

  // STEP 2 - add the imported data to state
  return (
    <div className="special-div">
      {specials.map(special => (
        <SpecialButton text={special} addSpecial={props.addSpecial} /> 
      ))}
  
    </div>
  );
};

export default Specials;