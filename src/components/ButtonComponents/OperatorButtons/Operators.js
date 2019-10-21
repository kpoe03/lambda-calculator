import React from "react";
import OperatorButton from './OperatorButton';
import { operators } from '../../../data';

//import any components needed

//Import your array data to from the provided data file

const Operators = (props) => {  

  // STEP 2 - add the imported data to state
  return (
    <div className="operator-div">
      {operators.map(operator => 
        <OperatorButton text={operator} addOperator={props.addOperator} />
      )}
    </div>
  );
};

export default Operators;
