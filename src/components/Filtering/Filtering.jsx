import ListExpenses from "../ListExpenses/ListExpenses";
import { useState } from "react";

function Filtering() {
  const [inputName, setInputName] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  

  addExpense() {
    <div>
        {/* what do i want from the add button */}
    </div>
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
        onClick={addExpense}
      >
        Add
      </button>
    </div>
  );
}

export default Filtering;
{
  /*i need to get the users input adn then save that in a 
statement, after whitch just make the list item the 
statement*/
}
