function Expenses({ fakeData }) {
  return (
    <div>
      <p>{fakeData.name}</p>
      <p>{fakeData.amount}</p>
    </div>
  );
}

export default Expenses;
