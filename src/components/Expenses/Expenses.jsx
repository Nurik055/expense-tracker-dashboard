function Expenses({ expense }) {
  return (
    <div>
      <p>{expense.name}</p>
      <p>{expense.amount}</p>
      <p>{expense.description}</p>
      <p>{expense.category}</p>
    </div>
  );
}

export default Expenses;
