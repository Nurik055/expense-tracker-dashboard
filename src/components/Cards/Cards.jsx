import "../Cards/Cards.css";
import { useState } from "react";

function Cards({ expenses, budget, setBudget }) {
  {
    /* this month and total */
  }
  const today = new Date();
  const currentMonth = today.getMonth();
  const months = [
  { name: "Jan", total: calculateTotal(0) },
  { name: "Feb", total: calculateTotal(1) },
  { name: "Mar", total: calculateTotal(2) },
  { name: "Apr", total: calculateTotal(3) },
  { name: "May", total: calculateTotal(4) },
  { name: "Jun", total: calculateTotal(5) },
  { name: "Jul", total: calculateTotal(6) },
  { name: "Aug", total: calculateTotal(7) },
  { name: "Sep", total: calculateTotal(8) },
  { name: "Oct", total: calculateTotal(9) },
  { name: "Nov", total: calculateTotal(10) },
  { name: "Dec", total: calculateTotal(11) },
];


{/* the months dashboard */}
  function calculateTotal(i) {

    function filterTheMonth(expenses) {
      return Number(expenses.month) === i;
    }
    const result = (expenses || []).filter(filterTheMonth);
    const totalPerMonth = result.reduce((sum, e) => {
      return sum + Number(e.amount)
    }, 0);

    return totalPerMonth;
  };
  let highest = 0;
  months.forEach(forEachFunction);
  function forEachFunction(month) {
    if(month.total > highest) {
      highest = month.total
      
    }
  }
  {/* or i could write it with an arrow function, like after for eachs () inside it start with the "month" */}
  



{/* other dashboards */}

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
        <h1>Expenses by months </h1>
        <p className="howManyMonthCovers">last 6 month</p>
        <p></p>
        <div className="verticalMoneyLevels" style={{ height: "100%" }}>
          <p className="verticalLevel">1000</p>
          <p className="verticalLevel">2000</p>
          <p className="verticalLevel">3000</p>
          <p className="verticalLevel">4000</p>
          <p className="verticalLevel">5000</p>
        </div>
        <div className="horizMonthLevels">
          <div>
            <div className="byMonthDashboard"style={{height: `${(months[currentMonth - 5].total / highest) * 100}%`}}></div>
            <p className="horizMonthLevel">{months[currentMonth - 5].name}</p>
          </div>

          <div>
            <div className="byMonthDashboard" style={{height: `${(months[currentMonth - 5].total / highest) * 100}%`}}></div>
            <p className="horizMonthLevel">{months[currentMonth - 4].name}</p>
          </div>

          <div>
            <div className="byMonthDashboard" style={{height: `${(months[currentMonth - 5].total / highest) * 100}%`}}></div>
            <p className="horizMonthLevel">{months[currentMonth - 3].name}</p>
          </div>

          <div>
            <div className="byMonthDashboard" style={{height: `${(months[currentMonth - 5].total / highest) * 100}%`}}></div>
            <p className="horizMonthLevel">{months[currentMonth - 2].name}</p>
          </div>

          <div>
            <div className="byMonthDashboard" style={{height: `${(months[currentMonth - 5].total / highest) * 100}%`}}></div>
            <p className="horizMonthLevel">{months[currentMonth - 1].name}</p>
          </div>

          <div>
            <div className="byMonthDashboard" style={{height: `${(months[currentMonth - 5].total / highest) * 100}%`}}></div>
            <p className="horizMonthLevel">{months[currentMonth].name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
