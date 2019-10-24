import React, { useState} from "react";
import NumberButton from './NumberButton';
import { numbers } from '../../../data';

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 


//Import your array data to from the provided data file
const Numbers = (props) => {
  // STEP 2 - add the imported data to state
  const [buttonNumbers] = useState(numbers);

  return (
    <div class="numberDiv">

      {buttonNumbers.map(number => {
        if(number === '0'){
          return <NumberButton key={number}
                               text={ number }
                               addNumber={ props.addNumber }
                               zero />
        }
        return <NumberButton key={number} 
                             text={ number } 
                             addNumber={ props.addNumber } />;
      })}

      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component */}
    </div>
  );
};

export default Numbers;