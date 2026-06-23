import "../Cards/Cards.css";
import { useState } from "react";

function Cards({expenses, budget, setBudget}) {
    {/* this month and total */}
  const today = new Date();
  const currentMonth = today.getMonth();

  function filterMonth(expenses) {
    return Number(expenses.month) === currentMonth;
  }

  const result = (expenses || []).filter(filterMonth);

  const total = result.reduce((sum, expense) => {
    return sum + Number(expense.amount);
  }, 0);


  {/* budget functions and updating it */}
  const [isEditing, setIsEditing] = useState(false);

  function budgetFunction(e) {
    if (!isEditing) {
      setIsEditing(true);
    } else {
      setIsEditing(false);
    }
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
          <p>Remaining: ${budget - total}</p>
          </>
          
        )}
      </div>
      <div className="remaining"></div>
    </div>
  );
}

export default Cards;
