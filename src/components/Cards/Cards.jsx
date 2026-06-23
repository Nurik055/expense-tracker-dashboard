import "../Cards/Cards.css";
import { useState } from "react";

function Cards({ expenses }) {
  const today = new Date();
  const currentMonth = today.getMonth();

  function filterMonth(expenses) {
    return Number(expenses.month) === currentMonth;
  }

  const result = (expenses || []).filter(filterMonth);

  const total = result.reduce((sum, expense) => {
    return sum + Number(expense.amount);
  }, 0);
  {
    /* expense is one item fome the array */
  }
  

  const [isEditing, setIsEditing] = useState(false);
  const [budget, setBudget] = useState(0);
  
  function budgetFunction(e) {
    
    if(!isEditing) {
        setIsEditing(true);
        
      }
      else{
        setIsEditing(false);
      }
    
  }
  

  return (
    <div>
      <div className="thisMSpend">
        <p className="thisMSpendP">This Month</p>
        <p className="thisMSpendN">${total}</p>
      </div>

      <div className="budgetCard" onDoubleClick={budgetFunction}>
        {isEditing ? (
          <input value={budget} onChange={(e)=>setBudget(e.target.value)}></input>
        ) : (
          <p>{budget}</p>
        )}
      </div>
    </div>
  );
}

export default Cards;
