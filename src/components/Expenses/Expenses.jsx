function Expenses({ expense }) {
  return (
    <div>
      <p>{expense.name}</p>
      <p>{expense.amount}</p>
    </div>
  );
}

export default Expenses;
