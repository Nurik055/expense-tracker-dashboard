import "../Expenses/Expenses.css";
import { useState } from "react";



function Expenses({ expense, setExpenses }) {
  const [changed, setChanged] = useState(false);
  const [editedName, setEditedName] = useState(expense.name);
  function removeExpense() {
    setExpenses((prev) => prev.filter((e) => e.id !== expense.id));
  }
  function changeExpense() {
    if(changed) {
      setChanged(false);
    }else {
      setChanged(true);
    }
  }

  function updateTheName() {
    setExpenses((prev) =>
    prev.map((e) => 
    e.id === expense.id ? {...e, name: editedName} : e));

    setChanged(false);
  }
  const theP = changed ? <input placeholder="change the name" value={editedName} onChange={(e)=> setEditedName(e.target.value)} onKeyDown={(e)=> {
    if(e.key === "Enter") {
      updateTheName();
    }
  }}></input> : <p>{expense.name}</p>
  return (
    <div className="expensesContainer">
      <div onDoubleClick={changeExpense}> {theP}</div>
 
      <p>{expense.amount}</p>
      <p>{expense.description}</p>
      <p>{expense.category}</p>
      <button onClick={removeExpense}>Remove</button>
    </div>
  );
}

export default Expenses;
