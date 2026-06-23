import "../Home/Home.css";
import ListExpenses from "../../components/ListExpenses/ListExpenses";
import Cards from "../../components/Cards/Cards";
import Filtering from "../../components/Filtering/Filtering";
import { useState } from "react";
import { Link } from "react-router-dom";

function Home({ expenses }) {
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
  const [budget, setBudget] = useState(0);

  function budgetFunction(e) {
    if (!isEditing) {
      setIsEditing(true);
    } else {
      setIsEditing(false);
    }
  }

  function updateBudget() {}

  return (
    <div>
      <Cards
        expenses={expenses}
        budget={budget}
        budgetFunction={budgetFunction}
        setBudget={setBudget}
        isEditing={isEditing}
        total={total}
        addExpense={addExpense}
      ></Cards>

      <ListExpenses expenses={expenses}></ListExpenses>
      <Link to="/add-expense-filtering">
        <button>Add Expense</button>
      </Link>
    </div>
  );
}

export default Home;
