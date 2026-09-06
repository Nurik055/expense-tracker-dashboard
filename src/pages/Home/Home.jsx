import "../Home/Home.css";
import ListExpenses from "../../components/ListExpenses/ListExpenses";
import Cards from "../../components/Cards/Cards";
import Filtering from "../../components/Filtering/Filtering";
import Navbar from "../../components/Navbar/Navbar"
import { useState } from "react";
import { Link } from "react-router-dom";

function Home({
  expenses,
  budget,
  setBudget,
  setExpenses,
  userInput,
  setUserInput,
  expenseEqual,
  today,
  currentMonth,
  select,
  setSelect,
  categoryFilter,
  setCategoryFilter,
}) {
  return (
    <div>
      <Navbar></Navbar>
      <Cards
        expenses={expenses}
        budget={budget}
        setBudget={setBudget}
      ></Cards>
<Filtering
        expenses={expenses}
        userInput={userInput}
        setExpenses={setExpenses}
        today={today}
        currentMonth={currentMonth}
        setUserInput={setUserInput}
        expenseEqual={expenseEqual}
        select={select}
        setSelect={setSelect}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
      ></Filtering>
      <ListExpenses
        expenses={expenses}
        setExpenses={setExpenses}
        expenseEqual={expenseEqual}
      ></ListExpenses>
      
      
    </div>
  );
}

export default Home;
