import "../Cards/Cards.css";
import { useState } from "react";

function Cards({ expenses, budget, setBudget }) {
  {
    /* this month and total */
  }
  const today = new Date();
  const currentMonth = today.getMonth();
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  function filterMonth(expenses) {
    return Number(expenses.month) === currentMonth;
  }

  const result = (expenses || []).filter(filterMonth);

  const total = result.reduce((sum, expense) => {
    return sum + Number(expense.amount);
  }, 0);

  {
    /* budget functions and updating it */
  }
  const [isEditing, setIsEditing] = useState(false);

  function budgetFunction(e) {
    if (!isEditing) {
      setIsEditing(true);
    } else {
      setIsEditing(false);
    }
  }
  {
    /* the dashboard and its text */
  }
  const expensePercent = (total / budget) * 100;
  const remaining = budget - total;
  const overTheBudget = total - budget;
  let spendingDifference = "";
  if (remaining > 0) {
    spendingDifference = <p className="remainingBudget">{remaining} remains</p>;
  } else if (remaining === 0) {
    spendingDifference = <p></p>;
  } else {
    spendingDifference = (
      <p className="overTheBudget">{overTheBudget} over the budget</p>
    );
  }

  return (
    <div>
      <div className="thisMSpend">
        <p className="thisMSpendP">This Month Spend:</p>
        <p className="thisMSpendN">${total}</p>
      </div>

      <div className="budgetCard" onDoubleClick={budgetFunction}>
        {isEditing ? (
          <input
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
          ></input>
        ) : (
          <>
            <p>Budget: {budget}</p>
          </>
        )}
      </div>

      <div className="budgetDashboardContainer">
        <p>Monthly budget</p>
        <p>
          ${total} of ${budget} spend
        </p>
        <div>{spendingDifference}</div>

        <div className="budgetDashboard" style={{ width: "100%" }}>
          <div
            className="spendingsDashboard"
            style={{ width: `${expensePercent}%` }}
          ></div>
        </div>
      </div>
      <div className="monthlyDashboardContainer">
        <h1></h1>
        <p></p>
        <div className="verticalMoneyLevels">
          <p className="verticalLevel">1000</p>
          <p className="verticalLevel">2000</p>
          <p className="verticalLevel">3000</p>
          <p className="verticalLevel">4000</p>
          <p className="verticalLevel">5000</p>
        </div>
        <div className="horizMonthLevels">
          <p className="horizMonthLevel">{months[currentMonth]}</p>
          <p className="horizMonthLevel">{months[currentMonth - 1]}</p>
          <p className="horizMonthLevel">{months[currentMonth - 2]}</p>
          <p className="horizMonthLevel">{months[currentMonth - 3]}</p>
          <p className="horizMonthLevel">{months[currentMonth - 4]}</p>
          <p className="horizMonthLevel">{months[currentMonth - 5]}</p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
