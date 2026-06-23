import { Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home/Home";
import { useState } from "react";
import Filtering from "../src/components/Filtering/Filtering";

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



  
  return (
    <Routes>
      <Route path="/" element={<Home addExpense={addExpense} expenses={expenses}/>} />
      <Route
        path="/add-expense-filtering"
        element={<Filtering addExpense={addExpense} />}
      />
    </Routes>
  );
}
