import "../Home/Home.css";
import ListExpenses from "../../components/ListExpenses/ListExpenses";
import Cards from "../../components/Cards/Cards";
import Filtering from "../../components/Filtering/Filtering";
import { useState } from "react";

function Home() {
  const [expenses, setExpenses] = useState([]);
const today = new Date();
  const currentMonth = today.getMonth();
  const addExpense = (newExpense) => {
    setExpenses((prev) => [...prev, { ...newExpense, id: Date.now(), month: currentMonth  }]);
  };

  return (
    <div>
      <Cards expenses={expenses}></Cards>
      <Filtering addExpense={addExpense}></Filtering>
      <ListExpenses expenses={expenses}></ListExpenses>
    </div>
  );
}

export default Home;
