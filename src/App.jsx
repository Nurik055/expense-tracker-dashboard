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

  const expenseEqual = expenses.filter((expense) => {
    return expense.name === userInput;
  });

  
  const selectedJobs = expenses.filter((expense) => {
    
    if(select === "thisMonth") {
      let selectedJob = expense.month = currentMonth
    }
    else {
      let selectedJob = expense
    }
  
    return expense.month === select
  })
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            expenses={userInput === "" ? expenses : expenseEqual : select}
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
