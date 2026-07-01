import { Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home/Home";
import { useState } from "react";
import AddingExpense from "../src/components/AddingExpense/AddingExpense";

export default function App() {
  const [expenses, setExpenses] = useState([]);
  const today = new Date();
  const currentMonth = today.getMonth();

  const addExpense = (newExpense) => {
    setExpenses((prev) => [
      ...prev,
      { ...newExpense, id: Date.now(), month: currentMonth },
    ]);
  };

  const [budget, setBudget] = useState(0);

  const [userInput, setUserInput] = useState("");
  const [select, setSelect] = useState("");

  let monthFilteredExpenses;

  if (select === "allTime") {
    monthFilteredExpenses = expenses;
  } else {
    monthFilteredExpenses = expenses.filter((expense) => {
      return expense.month === currentMonth;
    });
  }

  const [categoryFilter, setCategoryFilter] = useState("all");

  if (categoryFilter === "all") {
    // do nothng and just normanll monthFIlteredExpenses
  } else {
    monthFilteredExpenses = monthFilteredExpenses.filter(
      (monthFilteredExpense) => {
        return monthFilteredExpense.category === categoryFilter;
      },
    );
  }

  const expenseEqual = monthFilteredExpenses.filter((expense) => {
    return expense.name === userInput;
  });
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            expenses={userInput === "" ? monthFilteredExpenses : expenseEqual}
            setExpenses={setExpenses}
            today={today}
            currentMonth={currentMonth}
            budget={budget}
            setBudget={setBudget}
            userInput={userInput}
            setUserInput={setUserInput}
            expenseEqual={expenseEqual}
            select={select}
            setSelect={setSelect}
            categoryFilter={categoryFilter}
            setCategoryFilter={setCategoryFilter}
          />
        }
      />
      <Route
        path="/add-expense-filtering"
        element={<AddingExpense addExpense={addExpense} />}
      />
    </Routes>
  );
}
