import ListExpenses from "../ListExpenses/ListExpenses";
import { useState } from "react";

function Filtering({addExpense}) {
  const [inputName, setInputName] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  
  function callingAddExpense(inputName, inputAmount) {
    addExpense({ name: inputName, amount: inputAmount })
  }
  return (
    <div>
      <input 
      className="addingInput" 
      placeholder="Your expense"
      onChange={(e) => setInputName(e.target.value)}
      ></input>
      <input
        className="addingInputN"
        placeholder="$"
      onChange={(e) => setInputAmount(e.target.value)}
      ></input>
      <button
        className="addingButton"
        onClick={callingAddExpense}
      >
        Add
      </button>
    </div>
  );
}

export default Filtering;
{
  /*give the input amount and number to the list*/
}
