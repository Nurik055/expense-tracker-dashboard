import ListExpenses from "../ListExpenses/ListExpenses";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Filtering({ addExpense }) {
  const navigate = useNavigate();

  const [inputName, setInputName] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputDescrip, setInputDescrip] = useState("");
  const [category, setCategory] = useState("Food"); 
  // CHANGED: default value so select is not empty

  function handleSubmit(e) {
    
    e.preventDefault(); 
    

    addExpense({
      name: inputName,
      amount: inputAmount,
      description: inputDescrip,
      category: category,
    });

    navigate("/");
  }

  return (
    <form onSubmit={handleSubmit}>
      

      <h1>Add Expense</h1>

      <input
        className="addingInput"
        placeholder="Your expense"
        onChange={(e) => setInputName(e.target.value)}
      />
      

      <input
        className="addingInputN"
        type="number"
        placeholder="$"
        onChange={(e) => setInputAmount(e.target.value)}
      />

      <input
        className="addingDescription"
        placeholder="description"
        onChange={(e) => setInputDescrip(e.target.value)}
      />

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Bills">Bills</option>
        <option value="Other">Other</option>
      </select>

      <button
        className="addingButton"
        type="submit"
        
      >
        Add
      </button>
    </form>
  );
}

export default Filtering;