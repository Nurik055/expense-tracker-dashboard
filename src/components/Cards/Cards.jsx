import "../Cards/Cards.css";
import { useState } from "react";

function Cards({ expenses, budget, setBudget, budgetFunction, isEditing, total, addExpense}) {
  

  


  return (
    <div>
      <div className="thisMSpend">
        <p className="thisMSpendP">This Month Spend:</p>
        <p className="thisMSpendN">${total}</p>
      </div>

      <div className="budgetCard" onDoubleClick={budgetFunction}>
        {isEditing ? (
          <input value={budget} onChange={(e)=>setBudget(e.target.value)}></input>
        ) : (
          <p>Budget: {addExpense.amount-budget}</p>
        )}
      </div>
      <div className="remaining">

      </div>
    </div>
  );
}

export default Cards;
