import "../Home/Home.css";
import ListExpenses from "../../components/ListExpenses/ListExpenses";
import Cards from "../../components/Cards/Cards";
import Filtering from "../../components/Filtering/Filtering"
import { useState } from "react";
import { Link } from "react-router-dom";

function Home({ expenses, budget, setBudget, setExpenses, userInput, setUserInput, expenseEqual }) {
  return (
    <div>
      <Cards expenses={expenses} budget={budget} setBudget={setBudget}></Cards>

      <ListExpenses
        expenses={expenses}
        setExpenses={setExpenses}
            expenseEqual={expenseEqual}
      ></ListExpenses>
      <Link to="/add-expense-filtering">
        <button>Add Expense</button>
      </Link>
      <Filtering expenses={expenses} userInput={userInput}
            setUserInput={setUserInput}
            expenseEqual={expenseEqual}></Filtering>
      
    </div>
  );
}

export default Home;
