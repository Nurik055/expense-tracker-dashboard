import "../Expenses/Expenses.css";
import { useState } from "react";



function Expenses({ expense, setExpenses }) {
  const thisExpense = expense.id;
  const [changed, setChanged] = useState("")
  function removeExpense() {
    setExpenses((prev) => prev.filter((e) => e.id !== thisExpense));
  }
  function changeExpense() {
    if(changed) {
      setChanged(false);
    }else {
      setChanged(true);
    }
  }
  return (
    <div className="expensesContainer" onDoubleClick={changeExpense}>
      <p>{expense.name}</p>
      <p>{expense.amount}</p>
      <p>{expense.description}</p>
      <p>{expense.category}</p>
      <button onClick={removeExpense}>Remove</button>
    </div>
  );
}

export default Expenses;
