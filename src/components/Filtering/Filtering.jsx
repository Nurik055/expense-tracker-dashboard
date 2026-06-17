import ListExpenses from "../ListExpenses/ListExpenses";
import { useState } from "react";

function Filtering({ addExpense }) {
  const [inputName, setInputName] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputDescrip, setInputDescrip] = useState("");
  const [category, setCategory] = useState("")

  function callingAddExpense(inputName, inputAmount) {
    addExpense({
      name: inputName,
      amount: inputAmount,
      description: inputDescrip,
      category: category,
    });
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
      <input
        className="addingDescription"
        placeholder="description"
        onChange={(e) => setInputDescrip(e.target.value)}
      ></input>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Bills">Bills</option>
        <option value="Other">Other</option>
      </select>
      <button
        className="addingButton"
        onClick={() => callingAddExpense(inputName, inputAmount)}
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
