import "../Expenses/Expenses.css";
function Expenses({ expense, setExpenses }) {
  const thisExpense = expense.id;
  function removeExpense() {
    setExpenses((prev) => prev.filter((e) => e.id !== thisExpense));
  }
  return (
    <div className="expensesContainer">
      <p>{expense.name}</p>
      <p>{expense.amount}</p>
      <p>{expense.description}</p>
      <p>{expense.category}</p>
      <button onClick={removeExpense}>Remove</button>
    </div>
  );
}

export default Expenses;
