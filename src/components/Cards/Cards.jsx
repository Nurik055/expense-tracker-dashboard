import "../Cards/Cards.css";

function Cards({ expenses }) {

  const today = new Date();
  const currentMonth = today.getMonth();

  function filterMonth(expense) {
    return Number(expense.month) === currentMonth;
  }

  const result = (expenses || []).filter(filterMonth);

  const total = result.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);
  {/* expense is one item fome the array */}

  return (
    <div>
      <div className="thisMSpend">
        <p className="thisMSpendP">This Month</p>
        <p className="thisMSpendN">${total}</p>
      </div>

      
    </div>
  );
}

export default Cards;